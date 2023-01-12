import * as XLSX from 'xlsx-style'
import * as XLSXJS from 'xlsx'
import path from 'path'

const border = {
  top: {
    style: 'thin', color: { rgb: "00000000" }
  },
  left: {
    style: 'thin', color: { rgb: "00000000" }
  },
  bottom: {
    style: 'thin', color: { rgb: "00000000" }
  },
  right: {
    style: 'thin', color: { rgb: "00000000" }
  }
}

const alignment = {
  vertical: 'center',
  horizontal: 'center'
}

function getFirstSheet(workbook) {
  return workbook.Sheets[workbook.SheetNames[0]]
}

function createHeaderStyle() {
  return {
    alignment: {
      vertical: "center",
      horizontal: "center"
    },
    border: {
      top: {
        style: 'thin',
        color: {
          rgb: "00000000"
        }
      },
      left: {
        style: 'thin',
        color: {
          rgb: "00000000"
        }
      },
      bottom: {
        style: 'thin',
        color: {
          rgb: "00000000"
        }
      },
      right: {
        style: 'thin',
        color: {
          rgb: "00000000"
        }
      }
    }
  }
}

function createStyle() {
  return {
    border: {
      left: {
        style: 'thin',
        color: {
          rgb: "00000000"
        }
      },
      right: {
        style: 'thin',
        color: {
          rgb: "00000000"
        }
      },
      top: {
        style: 'thin',
        color: {
          rgb: "00000000"
        }
      },
      bottom: {
        style: 'thin',
        color: {
          rgb: "00000000"
        }
      }
    }
  }
}

function createCol(text, style) {
  return {
    v: text,
    s: style
  }
}

function createHeader(rowNo, header, incHeaderCol=0) {
  const obj = {}
  header.forEach(function (element, i) {
    obj[c(i+incHeaderCol, rowNo)] = createCol(element, createHeaderStyle())
  }, this)
  return obj
}

function fromSample(data, header) {
  const out = []
  header.forEach(function (item, i) {
    let c = data[item]
    out.push(c)
  })
  return out
}

function createRow(rowNo, data, incCol=0) {
  var out = {}
  data.forEach(function (item, i) {
    out[c(i+incCol, rowNo)] = createCol(item, createStyle())
  })
  return out
}

function createRowNum(rowNo, inc=1) {
  var out = {}
  out[c(0, rowNo+inc)] = createCol(rowNo+1, createStyle())
  return out
}

function extend(target) {
  var sources = [].slice.call(arguments, 1)
  sources.forEach(function (source) {
    for (var prop in source) {
      target[prop] = source[prop]
    }
  })
  return target
}

function c(C, R) {
  return XLSX.utils.encode_cell({ c: C, r: R })
}

function createSheet(dataJSON, headerList, preData = {}, incHeaderRow = 0, incHeaderCol = 0, incRow = 1, incCol = 0) {
  let out = preData
  const header = createHeader(incHeaderRow, headerList, incHeaderCol)
  out = extend(out, header)
  for (let i = 0; i < dataJSON.length; i++) {
    out = extend(out, createRow(i + incRow, fromSample(dataJSON[i], headerList), incCol))
    out = extend(out, createRowNum(i, incRow))
  }

  var range = { s: { c: 0, r: 0 }, e: { c: 200, r: dataJSON.length+100 } }
  out["!ref"] = XLSX.utils.encode_range(range)
  out["!cols"] = []
  var mini = 40
  var middle = 80
  var large = 240
  var sizes = [mini, middle, large, middle, middle, large, middle, middle, mini, mini]

  sizes.forEach(function (element, i) {
    out["!cols"][i] = {
      wpx: element
    }
  }, this)
  return out
}


function createBook(data, headerList, preData = {}, incHeaderRow = 0, incHeaderCol = 0, incRow = 1, incCol = 0) {
  return {
    SheetNames: ["Sheet1"],
    Sheets: {
      "Sheet1": createSheet(data, headerList, preData, incHeaderRow, incHeaderCol, incRow, incCol)
    }
  }
}

function writeBinary(data, headerList, preData = {}, incHeaderRow = 0, incHeaderCol = 0, incRow = 1, incCol = 0) {
  const workbook = createBook(data, headerList, preData, incHeaderRow, incHeaderCol, incRow, incCol)
  const defaultCellStyle = { font: { name: "Verdana", sz: 11, color: "FF00FF88"} }
  const woptions = { defaultCellStyle, bookType:'xlsx', bookSST:false, type:'binary' }

  return XLSX.write(workbook, woptions)
}

function readData(_path, fileName) {
  // const file = path.join(__dirname, '..', `utils/files/${fileName}`)
  const file = path.join(_path, fileName)
  const woptions = {}
  const workbook = XLSXJS.readFile(file, woptions)
  return { formatted: XLSXJS.utils.sheet_to_json(getFirstSheet(workbook)), unformatted: getFirstSheet(workbook) }
}

function readDataAcumulador(_path, fileName) {
  const file = path.join(_path, fileName)
  const woptions = {}
  const workbook = XLSXJS.readFile(file, woptions)
  return {
    acumulador: {
      formatted: XLSXJS.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[3]]),
      unformatted: workbook.Sheets[workbook.SheetNames[3]]
    },
    centralizador3T: {
      formatted: XLSXJS.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[2]]),
      unformatted: workbook.Sheets[workbook.SheetNames[2]]
    },
    centralizador2T: {
      formatted: XLSXJS.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[1]]),
      unformatted: workbook.Sheets[workbook.SheetNames[1]]
    },
    centralizador1T: {
      formatted: XLSXJS.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]),
      unformatted: workbook.Sheets[workbook.SheetNames[0]]
    }
  }
}

function asignBorder(rangeInput, ws = {}) {
  const _range = XLSX.utils.encode_range(rangeInput)
  const range = Object.values(XLSX.utils.decode_range(_range))
  const inicial = range[0]
  const final = range[1]

  for(let i = inicial.r; i <= final.r; i++) {
    for(let j = inicial.c; j <= final.c; j++) {
      if (!ws[c(j, i)])
        ws[c(j, i)] = { s: {border} }
    }
  }
}

function decodeRange(value) {
  return XLSX.utils.decode_range(value)
}

module.exports = {
  readData,
  readDataAcumulador,
  writeBinary,
  asignBorder,
  border,
  alignment,
  decodeRange
}
