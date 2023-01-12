import Debug from 'debug'
import { EstudiantesModel } from '../models/index.js'

const debug = Debug('module-db:Estudiantes')

class EstudiantesServiceDB {
  findAll() {
    debug('Find All Estudiantes\n')

    return EstudiantesModel.find().populate('user', {
      password: 0,
      roles: 0,
    })
  }

  findById(id) {
    debug('Find By Id Estudiante\n')

    return EstudiantesModel.findById(id).populate('user', {
      password: 0,
      roles: 0,
    })
  }

  findByUserId(user) {
    debug('Find By Id User\n')

    return EstudiantesModel.findOne({ user }).populate('user')
  }

  deleteById(_id) {
    debug('Delete By Id Estudiante\n')

    return EstudiantesModel.deleteOne({ _id })
  }

  create(data) {
    debug('Creating Estudiante\n')

    // creating a new Estudiante
    const newData = new EstudiantesModel(data)

    // saving the new Estudiante
    return newData.save()
  }
}

export default EstudiantesServiceDB
