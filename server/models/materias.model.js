import mongoose from 'mongoose'

const { Schema, model } = mongoose

const materiasSchema = new Schema(
  {
    nombre: {
      type: String,
      uppercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    sigla: {
      type: String,
      uppercase: true,
      trim: true,
      required: true,
    },
    estado: {
      type: String,
      uppercase: true,
      trim: true,
      default: 'ENABLED',
    },
  },
  {
    versionKey: false,
  }
)

export default model('Materias', materiasSchema)
