// Exportar/importar el historial de reflexiones como archivo JSON, para
// poder llevarlo de un navegador/dispositivo a otro. Las reflexiones viven
// solo en localStorage (no hay servidor ni cuenta de usuario), así que este
// archivo es la única forma de moverlas manualmente.

import { downloadBlob } from './download'

const REQUIRED_FIELDS = ['id', 'date', 'scenarioTitle', 'scenarioTag', 'questionText', 'feedbackText']

export function exportReflections(reflections) {
  const payload = {
    formato: 'fondos-indexados-reflexiones',
    version: 1,
    exportadoEl: new Date().toISOString(),
    reflexiones: reflections,
  }
  const today = new Date().toISOString().slice(0, 10)
  downloadBlob(`mis-reflexiones-backup-${today}.json`, JSON.stringify(payload, null, 2), 'application/json')
}

// Lanza un Error con un mensaje en español apto para mostrar al usuario si
// el archivo no es válido.
export function parseReflectionsFile(text) {
  let parsed
  try {
    parsed = JSON.parse(text)
  } catch {
    throw new Error('El archivo no es un JSON válido.')
  }

  const list = Array.isArray(parsed) ? parsed : parsed?.reflexiones
  if (!Array.isArray(list)) {
    throw new Error('El archivo no tiene el formato esperado: no se encontró una lista de reflexiones.')
  }

  const valid = list.filter(
    (r) => r && typeof r === 'object' && REQUIRED_FIELDS.every((field) => field in r)
  )
  if (valid.length === 0) {
    throw new Error('El archivo no contiene ninguna reflexión reconocible.')
  }
  return valid
}
