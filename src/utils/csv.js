// Utilidades mínimas para exportar datos a CSV desde el navegador, sin
// dependencias externas. Pensado para historiales pequeños (decenas de
// filas), no para grandes volúmenes de datos.

function escapeCsvField(value) {
  const text = value === null || value === undefined ? '' : String(value)
  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`
  }
  return text
}

export function toCsv(rows, headers) {
  const lines = [headers.map(escapeCsvField).join(',')]
  for (const row of rows) {
    lines.push(row.map(escapeCsvField).join(','))
  }
  return lines.join('\r\n')
}

export function downloadCsv(filename, rows, headers) {
  const csv = toCsv(rows, headers)
  // BOM para que Excel detecte UTF-8 y muestre bien los acentos.
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
