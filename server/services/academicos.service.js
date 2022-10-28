import Debug from 'debug'
import { AcademicosModel } from '../models/index.js'

const debug = Debug('module-db:Academicos')

class AcademicosServiceDB {
  findAll() {
    debug('Find All Academicos\n')

    return AcademicosModel.find().populate('user', {
      password: 0,
      roles: 0,
    })
  }

  findById(id) {
    debug('Find By Id Academico\n')

    return AcademicosModel.findById(id).populate('user', {
      password: 0,
      roles: 0,
    })
  }

  deleteById(_id) {
    debug('Delete By Id Academico\n')

    return AcademicosModel.deleteOne({ _id })
  }

  create(data) {
    debug('Creating Academico\n')

    // creating a new Academico
    const newData = new AcademicosModel(data)

    // saving the new Academico
    return newData.save()
  }
}

export default AcademicosServiceDB
