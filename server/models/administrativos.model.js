import mongoose from 'mongoose'

const { Schema, model } = mongoose

const administrativosSchema = new Schema(
  {
    detalle: String,
    telefono_interno: Number,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)

export default model('Administrativos', administrativosSchema)
