import * as XLSX from 'xlsx/xlsx.mjs'
import * as fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
XLSX.set_fs(fs)

function readEstudiantes() {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const ruta = path.join(__dirname, 'PM-SM.xlsx')
  const workbook = XLSX.readFile(ruta)
  const workbookSheets = workbook.SheetNames
  const sheet = workbookSheets[0]
  const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet])

  console.log(dataExcel)
}

readEstudiantes()
