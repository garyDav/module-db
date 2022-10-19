import mongoose from 'mongoose'

const { Schema, model } = mongoose

const estudiantesSchema = new Schema(
  {
    rude: String,
    codigo_banco: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    versionKey: false,
  }
)

export default model('Estudiantes', estudiantesSchema)
