import mongoose from 'mongoose'

const { Schema, model } = mongoose

const simulacroAreaSchema = new Schema(
  {
    nombre: String,
    sigla: String,
  },
  {
    versionKey: false,
  }
)

export default model('SimulacroArea', simulacroAreaSchema)
