#!/usr/bin/env node
// Obtiene noticias financieras de Finnhub, las filtra por relevancia
// (fondos indexados / renta fija / renta variable) usando coincidencia de
// palabras clave (sin IA), y escribe un resumen estático en
// public/market-news.json para que la app lo sirva sin exponer nunca la
// clave de la API al navegador.
//
// Uso local:
//   node --env-file=.env scripts/fetch-market-news.mjs
// (requiere un archivo .env en la raíz con FINNHUB_API_KEY=tu_clave)
//
// En GitHub Actions, FINNHUB_API_KEY se inyecta como secreto del repo.

import { writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { matchTopics, isNewScenarioCandidate } from '../src/data/newsTopics.js'
import { SCENARIOS } from '../src/data/scenarios.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'market-news.json')
const MAX_ARTICLES = 15
const MAX_AGE_HOURS = 48

const API_KEY = process.env.FINNHUB_API_KEY

async function fetchCategory(category) {
  const url = `https://finnhub.io/api/v1/news?category=${category}&token=${API_KEY}`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Finnhub respondió ${res.status} para categoría "${category}"`)
  }
  return res.json()
}

function toArticle(raw) {
  const text = `${raw.headline || ''} ${raw.summary || ''}`
  const matched = matchTopics(text)
  return {
    id: raw.id,
    headline: raw.headline,
    summary: raw.summary,
    source: raw.source,
    url: raw.url,
    datetime: new Date((raw.datetime || 0) * 1000).toISOString(),
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

  if (!API_KEY) {
    console.warn('FINNHUB_API_KEY no está definida: se escribe un archivo vacío sin llamar a la API.')
    await writeFile(
      OUTPUT_PATH,
      JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          status: 'sin_clave_configurada',
          articles: [],
        },
        null,
        2
      )
    )
    return
  }

  const cutoff = Date.now() - MAX_AGE_HOURS * 60 * 60 * 1000

  let raw = []
  try {
    const [general, forex] = await Promise.all([fetchCategory('general'), fetchCategory('forex')])
    raw = [...general, ...forex]
  } catch (err) {
    console.error('Error al llamar a Finnhub:', err.message)
    await writeFile(
      OUTPUT_PATH,
      JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          status: 'error_al_obtener_noticias',
          articles: [],
        },
        null,
        2
      )
    )
    process.exitCode = 0 // no rompemos el deploy por un fallo puntual de la API
    return
  }

  const seen = new Set()
  const relevant = []
  for (const item of raw) {
    if (!item.id || seen.has(item.id)) continue
    seen.add(item.id)
    const timestampMs = (item.datetime || 0) * 1000
    if (timestampMs < cutoff) continue
    const article = toArticle(item)
    if (article.topics.length === 0) continue // descartamos lo que no es relevante para RF/RV
    relevant.push(article)
  }

  relevant.sort((a, b) => new Date(b.datetime) - new Date(a.datetime))

  const output = {
    generatedAt: new Date().toISOString(),
    status: 'ok',
    coveredScenarioTags: [...new Set(SCENARIOS.map((s) => s.tag))],
    articles: relevant.slice(0, MAX_ARTICLES),
  }

  await writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2))
  console.log(`Escritas ${output.articles.length} noticias relevantes en ${OUTPUT_PATH}`)
}

main()
