# Fondos Indexados — Aprende a invertir

Aplicación web (PWA, responsive) para aprender los fundamentos de la inversión
en fondos indexados de renta fija y renta variable, orientada a un usuario
principiante total.

## Contenido

- **Teoría**: 11 lecciones cortas (5-10 min) en español, de básico a
  intermedio, con ejemplos numéricos y un test de opción múltiple al final de
  cada una, más un test final acumulativo.
- **Calculadora de interés compuesto**: evolución de un capital con
  aportación inicial y periódica, comparativa entre dos escenarios.
- **Simulador de cartera Renta Fija / Renta Variable**: simulación educativa
  con escenarios optimista/medio/pesimista y parámetros que define el usuario.
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
