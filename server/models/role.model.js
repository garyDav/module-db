import mongoose from 'mongoose'
const { Schema, model } = mongoose

export const ROLES = ['admin', 'director', 'profesor', 'estudiante']

const roleSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)

export default model('Role', roleSchema)
