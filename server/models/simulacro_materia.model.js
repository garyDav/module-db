import mongoose from 'mongoose'

const { Schema, model } = mongoose

const simulacroMateriaSchema = new Schema(
  {
    nombre: String,
    sigla: String,
  },
  {
    versionKey: false,
  }
)

export default model('SimulacroMateria', simulacroMateriaSchema)
