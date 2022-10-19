import mongoose from 'mongoose'

const { Schema, model } = mongoose

const academicosSchema = new Schema(
  {
    item: String,
    direccion: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    materias: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Materias',
      },
    ],
  },
  {
    versionKey: false,
  }
)

export default model('Academicos', academicosSchema)
