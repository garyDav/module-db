import Debug from 'debug'
import { RoleModel } from '../models/index.js'

const debug = Debug('module-db:Role')

class RoleServiceDB {
  findByIds(roles) {
    debug('Find Everyone By Role Ids \n')

    const query = { _id: { $in: roles } }
    return RoleModel.find(query)
  }

  findByNames(roles) {
    debug('Find Everyone By Role Names \n')

    const query = { name: { $in: roles } }
    return RoleModel.find(query)
  }
}

export default RoleServiceDB
