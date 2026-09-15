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
- **Mercado hoy**: resumen de noticias financieras reales obtenidas de
  fuentes RSS públicas (BCE, Reserva Federal, Google News — sin ninguna
  clave ni cuenta), clasificadas por tema y enlazadas a la teoría/glosario
  — ver detalles más abajo. Cuando detecta un tipo de situación no cubierto
  por los escenarios existentes, ofrece un espacio de reflexión libre en
  vez de una respuesta "correcta" no verificable.
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
periódicamente a partir de **fuentes RSS públicas, sin ninguna clave ni
cuenta**: el Banco Central Europeo, la Reserva Federal y búsquedas
temáticas en Google News. La app nunca llama a ningún servicio externo
desde el navegador de quien la visita.

- `scripts/fetch-market-news.mjs` descarga esos feeds RSS, clasifica cada
  noticia por tema usando `src/data/newsTopics.js` (coincidencia de
  palabras clave, sin IA) y escribe el resultado en
  `public/market-news.json`.
- El workflow `.github/workflows/fetch-market-news.yml` ejecuta ese script
  cada 6 horas, guarda el resultado en el repositorio y despliega el sitio
  con las noticias actualizadas. No requiere configurar ningún secreto.
- Para probarlo en local basta con ejecutar:
  ```bash
  node scripts/fetch-market-news.mjs
  ```
- Si algún feed falla puntualmente, se ignora y se sigue con el resto
  (`feedFailures` en el JSON resultante indica cuáles fallaron); si fallan
  todos, la sección muestra un aviso en vez de datos.
- Si una noticia trata un tipo de situación que ningún escenario educativo
  cubre todavía, la app lo señala y ofrece preguntas de reflexión libre
  (guardadas en "Mis reflexiones") en vez de inventar una respuesta
  "correcta" sobre un evento real y en curso.
