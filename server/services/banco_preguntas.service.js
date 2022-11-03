import Debug from 'debug'
import { BancoPreguntasModel } from '../models/index.js'

const debug = Debug('module-db:BancoPreguntas')

class BancoPreguntasServiceDB {
  findAll() {
    debug('Find All BancoPreguntas\n')

    return BancoPreguntasModel.find()
  }

  findById(id) {
    debug('Find By Id BancoPregunta\n')

    return BancoPreguntasModel.findById(id)
  }

  findByAcademicoId(id) {
    debug('Find BancoPregunta By Academico Id \n')

    return BancoPreguntasModel.findOne({ academico: id })
  }

  deleteById(_id) {
    debug('Delete By Id BancoPregunta\n')

    return BancoPreguntasModel.deleteOne({ _id })
  }

  create(data) {
    debug('Creating BancoPregunta\n')

    // creating a new BancoPregunta
    const newData = new BancoPreguntasModel(data)

    // saving the new BancoPregunta
    return newData.save()
  }
}

export default BancoPreguntasServiceDB
