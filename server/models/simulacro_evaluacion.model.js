import mongoose from 'mongoose'

const { Schema, model } = mongoose

const simulacroMateriaSchema = new Schema(
  {
    duracion_horas: Number,
    duracion_minutos: Number,
    estudiante: {
      type: Schema.Types.ObjectId,
      ref: 'Estudiantes',
    },
    simulacro_area: {
      type: Schema.Types.ObjectId,
      ref: 'SimulacroArea',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default model('SimulacroMateria', simulacroMateriaSchema)
