import Debug from 'debug'
import { AdministrativosModel } from '../models/index.js'

const debug = Debug('module-db:Administrativos')

class AdministrativosServiceDB {
  findAll() {
    debug('Find All Administrativos\n')

    return AdministrativosModel.find().populate('user')
  }

  findById( id ) {
    debug('Find By Id Administrativo\n')

    return AdministrativosModel.findById(id).populate('user')
  }

  deleteById( _id ) {
    debug('Delete By Id Administrativo\n')

    return AdministrativosModel.deleteOne({_id})
  }

  create(data) {
    debug('Creating Administrativo\n')

    // creating a new Administrativo
    const newData = new AdministrativosModel(data)

    // saving the new Administrativo
    return newData.save()
  }
}

export default AdministrativosServiceDB
