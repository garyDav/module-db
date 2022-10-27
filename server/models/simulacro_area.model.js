import mongoose from 'mongoose'

const { Schema, model } = mongoose

const simulacroAreaSchema = new Schema(
  {
    nombre: String,
    descripcion: String,
    porcentaje_area: {
      type: Number,
      required: true,
    },
    simulacro_examen: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: 'SimulacroExamen',
        },
        porcentaje_examen: Number,
      },
    ],
  },
  {
    versionKey: false,
  }
)

export default model('SimulacroArea', simulacroAreaSchema)
