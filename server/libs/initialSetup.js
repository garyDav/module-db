import bcrypt from 'bcryptjs'
import chalk from 'chalk'
import { RoleModel, UserModel } from '../models/index.js'

const log = console.log

const createRoles = async () => {
  try {
    // Count Documents
    const count = await RoleModel.estimatedDocumentCount()

    // check for existing roles
    if (count > 0) return

    // Create default Roles
    const values = await Promise.all([
      new RoleModel({ name: 'admin' }).save(),
      new RoleModel({ name: 'director' }).save(),
      new RoleModel({ name: 'profesor' }).save(),
      new RoleModel({ name: 'estudiante' }).save(),
    ])

    log(chalk.blue('Rol Created!'))
  } catch (error) {
    log(`${chalk.bgRed('[fatal error]')} ${chalk.red(error)}`)
  }
}

const createAdmin = async () => {
  try {
    // check for an existing admin user
    const user = await UserModel.findOne({ email: 'admin@gmail.com' })
    // get roles _id
    const roles = await RoleModel.find({
      name: { $in: ['admin'] },
    })

    if (!user) {
      // create a new admin user
      await UserModel.create({
        username: 'admin',
        email: 'admin@gmail.com',
        password: await bcrypt.hash('Admin.22', 10),
        nombre: 'Don Bosco',
        carnet: '10000000',
        extension: 'CH',
        roles: roles.map(role => role._id),
      })
      log(chalk.blue('Admin User Created!'))
    }
  } catch (error) {
    log(`${chalk.bgRed('[fatal error]')} ${chalk.red(error)}`)
  }
}

export { createRoles, createAdmin }
