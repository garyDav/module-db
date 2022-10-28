import Debug from 'debug'
import { MateriasModel } from '../models/index.js'

const debug = Debug('module-db:Materias')

class MateriasServiceDB {
  findAll() {
    debug('Find All Materias\n')

    return MateriasModel.find()
  }

  findById(id) {
    debug('Find By Id Materia\n')

    return MateriasModel.findById(id)
  }

  deleteById(_id) {
    debug('Delete By Id Materia\n')

    return MateriasModel.deleteOne({ _id })
  }

  create(data) {
    debug('Creating Materia\n')

    // creating a new Materia
    const newData = new MateriasModel(data)

    // saving the new Materia
    return newData.save()
  }
}

export default MateriasServiceDB
