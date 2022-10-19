import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const { Schema, model } = mongoose

const userSchema = new Schema(
  {
    username: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      uppercase: true,
      trim: true,
      required: true,
    },
    appaterno: {
      type: String,
      uppercase: true,
      trim: true,
      required: true,
    },
    apmaterno: {
      type: String,
      uppercase: true,
      trim: true,
      required: true,
    },
    carnet: {
      type: Number,
      required: true,
    },
    complemento: {
      type: String,
    },
    extension: {
      type: String,
      enum: ['CH', 'LP', 'CB', 'OR', 'PT', 'TJ', 'SC', 'BE', 'PD'],
      uppercase: true,
      required: true,
    },
    fecha_nacimiento: {
      type: Date,
    },
    img: {
      type: String,
    },
    estado: {
      type: String,
    },
    genero: {
      type: String,
    },
    celular: {
      type: Number,
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Role',
      },
    ],
    niveles: [String],
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

userSchema.statics.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

export default model('User', userSchema)
