// Simulador educativo de cartera Renta Fija / Renta Variable.
// Los porcentajes de rentabilidad son parámetros hipotéticos que
// introduce o ajusta la persona usuaria: NO son datos de mercado reales
// ni una predicción, sino un ejercicio para visualizar el efecto de la
// asignación de activos y la variabilidad de resultados a largo plazo.

import { roundEuros } from './compound'

// Valores por defecto ILUSTRATIVOS (no son datos de mercado reales).
// Sirven únicamente como punto de partida razonable para el ejercicio.
export const DEFAULT_SCENARIOS = {
  rentaFija: {
    optimista: 3,
    medio: 1.5,
    pesimista: -1,
  },
  rentaVariable: {
    optimista: 10,
    medio: 6,
    pesimista: -8,
  },
}

/**
 * Combina la rentabilidad de RF y RV según el peso de cada una en la cartera.
 */
export function blendedReturn(pctRentaFija, returnRF, returnRV) {
  const wRF = pctRentaFija / 100
  const wRV = 1 - wRF
  return wRF * returnRF + wRV * returnRV
}

/**
 * Simula la evolución de una cartera con aportaciones anuales constantes
 * bajo tres escenarios de rentabilidad (optimista, medio, pesimista).
 *
 * @param {Object} params
 * @param {number} params.initial - Capital inicial (€)
 * @param {number} params.annualContribution - Aportación anual (€)
 * @param {number} params.years - Horizonte temporal en años
 * @param {number} params.pctRentaFija - % de la cartera en renta fija (0-100)
 * @param {Object} params.scenarios - { rentaFija: {optimista, medio, pesimista}, rentaVariable: {...} }
 */
export function simulatePortfolio({ initial, annualContribution, years, pctRentaFija, scenarios }) {
  const labels = ['pesimista', 'medio', 'optimista']
  const result = {}

  for (const label of labels) {
    const rate = blendedReturn(
      pctRentaFija,
      scenarios.rentaFija[label],
      scenarios.rentaVariable[label]
    )
    const series = [{ year: 0, value: initial }]
    let value = initial
    for (let year = 1; year <= years; year++) {
      value = value * (1 + rate / 100) + annualContribution
      series.push({ year, value: roundEuros(value) })
    }
    result[label] = { rate: roundEuros(rate), series }
  }

  return result
}
