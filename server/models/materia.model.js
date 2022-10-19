import mongoose from 'mongoose'

const { Schema, model } = mongoose

const materiaSchema = new Schema(
  {
    nombre: String,
    sigla: String,
  },
  {
    versionKey: false,
  }
)

export default model('Materia', materiaSchema)
