import mongoose from 'mongoose'
const { Schema, model } = mongoose

export const ROLES = ['admin', 'director', 'profesor', 'estudiante']

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
)

export default model('Role', roleSchema)
