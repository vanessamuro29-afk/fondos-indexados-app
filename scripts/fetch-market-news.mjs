#!/usr/bin/env node
// Obtiene noticias financieras de fuentes RSS PÚBLICAS (sin ninguna clave
// ni cuenta, ni para quien mantiene la app ni para quien la usa): el BCE,
// la Reserva Federal y búsquedas temáticas en Google News. Las clasifica
// por tema usando src/data/newsTopics.js (coincidencia de palabras clave,
// sin IA) y escribe un resumen estático en public/market-news.json para
// que la app lo sirva sin llamar a ningún servicio externo desde el
// navegador de quien la visite.
//
// Uso local:
//   node scripts/fetch-market-news.mjs
//
// En GitHub Actions se ejecuta igual, sin ningún secreto que configurar.

import { writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { matchTopics, isNewScenarioCandidate, NEWS_TOPICS } from '../src/data/newsTopics.js'
import { SCENARIOS } from '../src/data/scenarios.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'market-news.json')
const MAX_ARTICLES = 20
const MAX_AGE_HOURS = 48
// Evita que un tema con mucha actividad puntual (p. ej. una noticia viral de
// criptomonedas) acapare todos los huecos y deje fuera al resto de temas.
const MAX_PER_TOPIC = 5

function topicById(id) {
  const topic = NEWS_TOPICS.find((t) => t.id === id)
  if (!topic) throw new Error(`Tema desconocido: ${id}`)
  return topic
}

// Cada feed es una fuente pública sin autenticación. Los feeds de Google
// News ya vienen filtrados por tema en la propia consulta; los oficiales
// (BCE, Fed) se etiquetan directamente con "tipos de interés".
const FEEDS = [
  {
    url: 'https://www.ecb.europa.eu/rss/press.xml',
    sourceLabel: 'Banco Central Europeo (BCE)',
    forcedTopicId: 'tipos-interes',
  },
  {
    url: 'https://www.federalreserve.gov/feeds/press_all.xml',
    sourceLabel: 'Reserva Federal (Fed)',
    forcedTopicId: 'tipos-interes',
  },
  { url: googleNewsUrl('inflación IPC economía'), forcedTopicId: 'inflacion' },
  { url: googleNewsUrl('bolsa mercados renta variable acciones'), forcedTopicId: 'renta-variable' },
  { url: googleNewsUrl('curva de tipos bonos deuda pública'), forcedTopicId: 'curva-tipos' },
  { url: googleNewsUrl('bitcoin criptomonedas'), forcedTopicId: 'criptomonedas' },
  { url: googleNewsUrl('petróleo materias primas'), forcedTopicId: 'materias-primas' },
  { url: googleNewsUrl('aranceles guerra comercial'), forcedTopicId: 'comercio-aranceles' },
  { url: googleNewsUrl('crisis bancaria quiebra banco'), forcedTopicId: 'sector-bancario' },
  { url: googleNewsUrl('tipo de cambio dólar euro divisas'), forcedTopicId: 'divisas' },
]

function googleNewsUrl(query) {
  const params = new URLSearchParams({ q: query, hl: 'es', gl: 'ES', ceid: 'ES:es' })
  return `https://news.google.com/rss/search?${params.toString()}`
}

function stripHtml(text) {
  return (text || '').replace(/<[^>]+>/g, '').trim()
}

// Google News (y otros feeds) escapan el HTML como texto XML normal (sin
// CDATA): el "&" de un "&nbsp;" que hay dentro del HTML original se
// convierte en "&amp;nbsp;". Hay que revertir ESE escapado XML primero
// para recuperar el HTML original, y solo después limpiar las etiquetas
// y decodificar entidades como &nbsp; que quedan al descubierto.
function decodeXmlEscapes(text) {
  return (text || '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&amp;/g, '&')
}

function decodeRemainingEntities(text) {
  return (text || '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/\s+/g, ' ')
    .trim()
}

function extractTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'))
  if (!match) return ''
  const raw = match[1].trim()
  const cdataMatch = raw.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/)
  const inner = cdataMatch ? cdataMatch[1] : decodeXmlEscapes(raw)
  return decodeRemainingEntities(stripHtml(inner))
}

function extractSourceAttr(block) {
  const match = block.match(/<source[^>]*url="([^"]*)"[^>]*>([\s\S]*?)<\/source>/i)
  return match ? decodeRemainingEntities(decodeXmlEscapes(match[2].trim())) : null
}

function parseRss(xml) {
  const items = xml.match(/<item[^>]*>[\s\S]*?<\/item>/gi) || []
  return items.map((block) => ({
    title: extractTag(block, 'title'),
    link: extractTag(block, 'link') || (block.match(/<link[^>]*>([\s\S]*?)<\/link>/i) || [])[1],
    description: extractTag(block, 'description'),
    pubDate: extractTag(block, 'pubDate'),
    sourceFromFeed: extractSourceAttr(block),
  }))
}

async function fetchFeed(feed) {
  const res = await fetch(feed.url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; FondosIndexadosApp-Educativo/1.0)' },
  })
  if (!res.ok) throw new Error(`${feed.url} respondió ${res.status}`)
  const xml = await res.text()
  const items = parseRss(xml)
  return items.map((item) => {
    const source = item.sourceFromFeed || feed.sourceLabel || 'Fuente desconocida'
    // Google News añade " - Nombre de la fuente" al final del titular y
    // del resumen; lo quitamos para no repetirlo, ya que la fuente se
    // muestra por separado en la app.
    const suffix = ` - ${source}`
    const headline = item.title.endsWith(suffix) ? item.title.slice(0, -suffix.length) : item.title
    const descriptionWithoutSource = item.description.endsWith(` ${source}`)
      ? item.description.slice(0, -source.length).trim()
      : item.description
    return {
      headline,
      // Google News a veces agrupa varias noticias relacionadas en una
      // sola descripción muy larga ("full coverage"): la acortamos para
      // que se muestre bien en la app.
      summary: truncate(descriptionWithoutSource, 220),
      source,
      url: item.link,
      datetime: item.pubDate ? new Date(item.pubDate) : null,
      forcedTopicId: feed.forcedTopicId,
    }
  })
}

function truncate(text, maxLength) {
  if (!text || text.length <= maxLength) return text
  const cut = text.slice(0, maxLength)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`
}

function toArticle(raw, seenIdCounter) {
  const text = `${raw.headline || ''} ${raw.summary || ''}`
  const matchedByKeyword = matchTopics(text)
  const topicsMap = new Map(matchedByKeyword.map((t) => [t.id, t]))
  if (raw.forcedTopicId) {
    topicsMap.set(raw.forcedTopicId, topicById(raw.forcedTopicId))
  }
  const matched = [...topicsMap.values()]

  return {
    id: `n${seenIdCounter}`,
    headline: raw.headline,
    summary: raw.summary,
    source: raw.source,
    url: raw.url,
    datetime: raw.datetime.toISOString(),
    topics: matched.map((t) => ({
      id: t.id,
      label: t.label,
      scenarioTag: t.scenarioTag,
      glossaryTerms: t.glossaryTerms,
      note: t.note,
    })),
    isNewScenarioCandidate: isNewScenarioCandidate(matched),
  }
}

async function main() {
  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true })

  const cutoff = Date.now() - MAX_AGE_HOURS * 60 * 60 * 1000
  const results = await Promise.allSettled(FEEDS.map(fetchFeed))

  const failures = []
  let raw = []
  results.forEach((result, i) => {
    if (result.status === 'fulfilled') {
      raw = raw.concat(result.value)
    } else {
      failures.push(`${FEEDS[i].url}: ${result.reason.message}`)
    }
  })

  if (failures.length) {
    console.warn('Algunos feeds fallaron (se continúa con el resto):\n' + failures.join('\n'))
  }

  if (raw.length === 0) {
    console.error('Ningún feed respondió correctamente.')
    await writeFile(
      OUTPUT_PATH,
      JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          status: 'error_al_obtener_noticias',
          feedFailures: failures,
          articles: [],
        },
        null,
        2
      )
    )
    return
  }

  const seenUrls = new Set()
  const relevant = []
  let counter = 0
  for (const item of raw) {
    if (!item.url || seenUrls.has(item.url)) continue
    if (!item.headline || !item.datetime || Number.isNaN(item.datetime.getTime())) continue
    if (item.datetime.getTime() < cutoff) continue
    seenUrls.add(item.url)
    counter += 1
    const article = toArticle(item, counter)
    if (article.topics.length === 0) continue
    relevant.push(article)
  }

  relevant.sort((a, b) => new Date(b.datetime) - new Date(a.datetime))

  // Selección con diversidad de temas: si un tema concreto tiene muchas más
  // noticias que el resto en este momento (p. ej. un pico de criptomonedas),
  // no debe ocupar todos los huecos y dejar fuera temas menos frecuentes.
  const topicCounts = new Map()
  const selected = []
  const leftover = []
  for (const article of relevant) {
    const underCap = article.topics.some((t) => (topicCounts.get(t.id) || 0) < MAX_PER_TOPIC)
    if (underCap && selected.length < MAX_ARTICLES) {
      selected.push(article)
      for (const t of article.topics) {
        topicCounts.set(t.id, (topicCounts.get(t.id) || 0) + 1)
      }
    } else {
      leftover.push(article)
    }
  }
  // Si aplicar el límite por tema deja huecos libres (pocos temas distintos
  // en las últimas horas), se rellenan con las noticias restantes por orden
  // de fecha para no mostrar menos de MAX_ARTICLES sin necesidad.
  for (const article of leftover) {
    if (selected.length >= MAX_ARTICLES) break
    selected.push(article)
  }
  selected.sort((a, b) => new Date(b.datetime) - new Date(a.datetime))

  const output = {
    generatedAt: new Date().toISOString(),
    status: 'ok',
    feedFailures: failures,
    coveredScenarioTags: [...new Set(SCENARIOS.map((s) => s.tag))],
    articles: selected,
  }

  await writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2))
  console.log(`Escritas ${output.articles.length} noticias relevantes en ${OUTPUT_PATH}`)
}

main()
