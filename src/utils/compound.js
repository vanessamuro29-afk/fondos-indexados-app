// Fórmulas estándar de interés compuesto con aportaciones periódicas.
// Estas funciones son puramente matemáticas: no usan ni representan
// datos reales de mercado. La rentabilidad anual es siempre un
// parámetro que introduce la persona usuaria.

/**
 * Calcula la evolución año a año de un capital con aportaciones
 * mensuales constantes, usando interés compuesto.
 *
 * @param {Object} params
 * @param {number} params.initial - Aportación inicial (€)
 * @param {number} params.monthlyContribution - Aportación periódica mensual (€)
 * @param {number} params.years - Número de años a simular
 * @param {number} params.annualReturnPct - Rentabilidad anual esperada, en % (ej. 6 = 6%)
 * @returns {Array<{year: number, withContributions: number, withoutContributions: number, contributed: number}>}
 */
export function simulateGrowth({ initial, monthlyContribution, years, annualReturnPct }) {
  const annualRate = annualReturnPct / 100
  const monthlyRate = Math.pow(1 + annualRate, 1 / 12) - 1

  const series = [
    { year: 0, withContributions: initial, withoutContributions: initial, contributed: initial },
  ]

  let withContributions = initial
  let withoutContributions = initial
  let contributed = initial

  const totalMonths = Math.round(years * 12)

  for (let month = 1; month <= totalMonths; month++) {
    withContributions = withContributions * (1 + monthlyRate) + monthlyContribution
    withoutContributions = withoutContributions * (1 + monthlyRate)
    contributed += monthlyContribution

    if (month % 12 === 0) {
      series.push({
        year: month / 12,
        withContributions: roundEuros(withContributions),
        withoutContributions: roundEuros(withoutContributions),
        contributed: roundEuros(contributed),
      })
    }
  }

  return series
}

export function roundEuros(value) {
  return Math.round(value * 100) / 100
}

export function formatEuros(value) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatPercent(value) {
  return new Intl.NumberFormat('es-ES', {
    style: 'percent',
    maximumFractionDigits: 1,
  }).format(value / 100)
}
