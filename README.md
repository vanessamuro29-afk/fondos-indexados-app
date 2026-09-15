# Fondos Indexados — Aprende a invertir

Aplicación web (PWA, responsive) para aprender los fundamentos de la inversión
en fondos indexados de renta fija y renta variable, orientada a un usuario
principiante total.

## Contenido

- **Teoría**: 18 lecciones cortas (5-10 min) en español, de básico a
  intermedio, con ejemplos numéricos y un test de opción múltiple al final de
  cada una, más un test final acumulativo.
- **Calculadora de interés compuesto**: evolución de un capital con
  aportación inicial y periódica, comparativa entre dos escenarios.
- **Simulador de cartera Renta Fija / Renta Variable**: simulación educativa
  con escenarios optimista/medio/pesimista y parámetros que define el usuario.
- **Escenarios de mercado**: casos educativos ficticios para practicar
  razonamiento, con un campo de reflexión libre antes de ver el feedback.
- **Mercado hoy**: resumen de noticias financieras reales (vía Finnhub),
  clasificadas por tema y enlazadas a la teoría/glosario — ver detalles más
  abajo. Cuando detecta un tipo de situación no cubierto por los escenarios
  existentes, ofrece un espacio de reflexión libre en vez de una respuesta
  "correcta" no verificable.
- **Mis reflexiones**: historial descargable en CSV de todo lo escrito en
  escenarios y en "Mercado hoy".
- **Glosario**, **Checklist pre-inversión** y **Fuentes fiables**.
- **Progreso**: lecciones completadas y resultados de tests, guardados solo
  en el `localStorage` del navegador (sin backend ni cuentas de usuario).

Todas las cifras de rentabilidad, comisiones u otros parámetros numéricos que
no citen explícitamente una fuente y fecha son **valores ilustrativos**, sin
relación con ningún dato de mercado real. La app no constituye asesoramiento
ni recomendación de inversión (ver `/aviso-legal` dentro de la app).

## Stack técnico

- React + Vite
- Tailwind CSS v4
- React Router
- Recharts (gráficos)
- vite-plugin-pwa (instalable como PWA)

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # previsualizar el build
npm run lint     # oxlint
```

## Mercado hoy: cómo funciona

Esta sección lee un archivo estático (`public/market-news.json`) generado
periódicamente — la app **nunca** llama a ninguna API de noticias desde el
navegador, así que ninguna clave se expone a quien visite el sitio.

- `scripts/fetch-market-news.mjs` llama a la API de [Finnhub](https://finnhub.io)
  (plan gratuito), clasifica cada noticia por tema usando
  `src/data/newsTopics.js` (coincidencia de palabras clave, sin IA) y escribe
  el resultado en `public/market-news.json`.
- El workflow `.github/workflows/fetch-market-news.yml` ejecuta ese script
  cada 6 horas usando el secreto de repositorio `FINNHUB_API_KEY`
  (Settings → Secrets and variables → Actions), guarda el resultado y
  despliega el sitio con las noticias actualizadas.
- Para probarlo en local, crea un `.env` a partir de `.env.example` con tu
  propia clave gratuita de Finnhub y ejecuta:
  ```bash
  node --env-file=.env scripts/fetch-market-news.mjs
  ```
- Si una noticia trata un tipo de situación que ningún escenario educativo
  cubre todavía, la app lo señala y ofrece preguntas de reflexión libre
  (guardadas en "Mis reflexiones") en vez de inventar una respuesta
  "correcta" sobre un evento real y en curso.
