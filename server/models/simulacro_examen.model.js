import mongoose from 'mongoose'

const { Schema, model } = mongoose

const simulacroExamenSchema = new Schema(
  {
    materia: {
      type: Schema.Types.ObjectId,
      ref: 'Materia',
    },
    simulacro_area: {
      type: Schema.Types.ObjectId,
      ref: 'SimulacroArea',
    },
    preguntas: [
      {
        type: Schema.Types.ObjectId,
        ref: 'BancoPreguntas',
      },
    ],
  },
  {
    versionKey: false,
  }
)

export default model('SimulacroExamen', simulacroExamenSchema)
