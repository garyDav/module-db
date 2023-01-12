import Debug from 'debug'
import { InscripcionModel } from '../models/index.js'

const debug = Debug('module-db:Inscripcion')

class InscripcionServiceDB {
  findAll() {
    debug('Find All Inscripcion\n')

    return InscripcionModel.find().populate('user')
  }

  findById(id) {
    debug('Find By Id Inscripcion\n')

    return InscripcionModel.findById(id).populate('user')
  }

  findByUserId(user) {
    debug('Find Inscripcion By User Id\n')

    return InscripcionModel.findOne({ user }).populate('user')
  }

  deleteById(_id) {
    debug('Delete By Id Inscripcion\n')

    return InscripcionModel.deleteOne({ _id })
  }

  create(data) {
    debug('Creating Inscripcion\n')

    // creating a new Inscripcion
    const newData = new InscripcionModel(data)

    // saving the new Inscripcion
    return newData.save()
  }

  update(data) {
    debug('Update By User Id\n')
    const steps = data.steps
    const user = data.userId
    delete data.userId
    delete data.steps

    return InscripcionModel.findOneAndUpdate(
      { user },
      {
        $addToSet: { steps },
        $set: data,
      }
    )
  }
}

export default InscripcionServiceDB
