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

function decodeEntities(text) {
  return (text || '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/\s+/g, ' ')
    .trim()
}

function extractTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'))
  if (!match) return ''
  const raw = match[1].trim()
  const cdataMatch = raw.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/)
  return decodeEntities(stripHtml(cdataMatch ? cdataMatch[1] : raw))
}

function extractSourceAttr(block) {
  const match = block.match(/<source[^>]*url="([^"]*)"[^>]*>([\s\S]*?)<\/source>/i)
  return match ? decodeEntities(match[2].trim()) : null
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
  if (process.env.DEBUG_RSS) {
    const firstItem = (xml.match(/<item[^>]*>[\s\S]*?<\/item>/i) || [])[0]
    console.log(`--- DEBUG_RSS raw item from ${feed.url} ---\n${firstItem}\n--- fin ---`)
  }
  const items = parseRss(xml)
  return items.map((item) => {
    const source = item.sourceFromFeed || feed.sourceLabel || 'Fuente desconocida'
    // Google News añade " - Nombre de la fuente" al final del titular; lo
    // quitamos para no repetirlo, ya que la fuente se muestra por separado.
    const suffix = ` - ${source}`
    const headline = item.title.endsWith(suffix) ? item.title.slice(0, -suffix.length) : item.title
    return {
      headline,
      summary: item.description,
      source,
      url: item.link,
      datetime: item.pubDate ? new Date(item.pubDate) : null,
      forcedTopicId: feed.forcedTopicId,
    }
  })
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

  const output = {
    generatedAt: new Date().toISOString(),
    status: 'ok',
    feedFailures: failures,
    coveredScenarioTags: [...new Set(SCENARIOS.map((s) => s.tag))],
    articles: relevant.slice(0, MAX_ARTICLES),
  }

  await writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2))
  console.log(`Escritas ${output.articles.length} noticias relevantes en ${OUTPUT_PATH}`)
}

main()
