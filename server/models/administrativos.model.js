import mongoose from 'mongoose'

const { Schema, model } = mongoose

const administrativosSchema = new Schema(
  {
    descripcion: String,
    telefono_interno: Number,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
    },
  },
  {
    versionKey: false,
  }
)

export default model('Administrativos', administrativosSchema)
