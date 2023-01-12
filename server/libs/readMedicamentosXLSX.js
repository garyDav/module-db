import path from 'path'
import * as XLSX from 'xlsx'
import { fileURLToPath } from 'url'

function datosExcel() {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const ruta = path.join(__dirname, 'PM-SM.xlsx')
  const workbook = XLSX.readFile(ruta)
  /*const workbookSheets = workbook.SheetNames
  const sheet = workbookSheets[0]
  const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
  const data = {}
  let medicamentos = [],
    nombresDB = []

  for (const fila of dataExcel) {
    for (var key in fila) {
      nombresDB.push(key)
    }
    break
  }

  for (const fila of dataExcel) {
    data['id'] = Number(fila['IDProducto'])
    data['grupo'] = fila['Grupo']
    data['producto'] = fila['Producto']
    data['precio'] = Number(fila['Precio'])
    medicamentos.push(Object.assign({}, data))
  }

  return medicamentos*/
}

// module.exports = {
//   datosExcel,
// }
datosExcel()
