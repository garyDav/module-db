import Debug from 'debug'
import bcrypt from 'bcryptjs'
import { UserModel, RoleModel } from '../models/index.js'

const debug = Debug('module-db:User')

class UserServiceDB {
  async register(user, roles) {
    if (roles.length > 0) debug('Register User with Roles\n')
    else debug('Register User none Roles\n')
    // Creating a new User Object
    const newUser = new UserModel(user)

    // checking for roles
    if (roles) {
      const foundRoles = await RoleModel.find({ name: { $in: roles } })
      newUser.roles = foundRoles.map(role => role._id)
    } else {
      const role = await RoleModel.findOne({ name: 'user' })
      newUser.roles = [role._id]
    }

    // Saving the User Object in Mongodb
    return newUser.save()
  }

  async create(user) {
    debug('Creating User\n')

    // creating a new User
    const newUser = new UserModel(user)

    // encrypting password
    newUser.password = await this.encryptPassword(newUser.password)

    // saving the new user
    return newUser.save()
  }

  findById(id) {
    debug('Find By Id User\n')

    const columns = { password: 0 }
    return UserModel.findById(id, columns)
  }

  findByUsername(username) {
    debug('Find By Username User\n')

    const query = { username }
    return UserModel.findOne(query).populate('roles')
  }

  findByEmail(email) {
    debug('Find By Email User\n')

    const query = { email }
    return UserModel.findOne(query).populate('roles')
  }

  async encryptPassword(password) {
    debug('encryptPassword\n')

    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  }

  async comparePassword(password, receivedPassword) {
    debug('comparePassword\n')

    return await bcrypt.compare(password, receivedPassword)
  }
}

export default UserServiceDB
