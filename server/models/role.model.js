import mongoose from 'mongoose'
const { Schema, model } = mongoose

export const ROLES = [
  'admin',
  'administracion',
  'contabilidad',
  'director',
  'secretaria',
  'profesor',
  'regencia',
  'inscriptor',
  'enfermeria',
  'psicologia',
  'informaciones',
  'estudiante',
]

const roleSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)

export default model('Role', roleSchema)
