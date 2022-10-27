import mongoose from 'mongoose'

const { Schema, model } = mongoose

const academicosSchema = new Schema(
  {
    item: {
      type: String,
      uppercase: true,
      trim: true,
      unique: true,
    },
    direccion: {
      type: String,
      uppercase: true,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
      required: true,
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
