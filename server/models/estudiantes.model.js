import mongoose from 'mongoose'

const { Schema, model } = mongoose

const estudiantesSchema = new Schema(
  {
    rude: {
      type: String,
      uppercase: true,
      trim: true,
      unique: true,
    },
    codigo_banco: {
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
  },
  {
    versionKey: false,
  }
)

export default model('Estudiantes', estudiantesSchema)
