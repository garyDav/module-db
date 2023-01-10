import mongoose from 'mongoose'

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
      trim: true,
      required: true,
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
      enum: ['CH', 'TJ', 'PT', 'LP', 'OR', 'CB', 'SC', 'BN', 'PD'],
      uppercase: true,
      required: true,
    },
    fecha_nacimiento: {
      type: Date,
      required: true,
    },
    img: {
      type: String,
    },
    estado: {
      type: String,
      uppercase: true,
      trim: true,
      default: 'DESCONECTADO',
    },
    genero: {
      type: String,
      enum: ['femenino', 'masculino', 'otro'],
      required: true,
    },
    celular: {
      type: Number,
      required: true,
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Role',
        required: true,
      },
    ],
    niveles: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default model('User', userSchema)
