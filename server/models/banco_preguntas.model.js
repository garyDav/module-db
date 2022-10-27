import mongoose from 'mongoose'

const { Schema, model } = mongoose

const bancoPreguntasSchema = new Schema(
  {
    preguntas: [
      {
        pregunta_txt: String,
        pregunta_img: [String],
        isVisible: Boolean,
        claves: [
          {
            clave: String,
            isImg: { type: Boolean, default: false },
          },
        ],
      },
    ],
    materia: {
      type: Schema.Types.ObjectId,
      ref: 'Materia',
      required: true,
    },
    academico: {
      type: Schema.Types.ObjectId,
      ref: 'Academicos',
      required: true,
    },
  },
  {
    versionKey: false,
  }
)

export default model('BancoPreguntas', bancoPreguntasSchema)
