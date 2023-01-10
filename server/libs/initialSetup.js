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
      new RoleModel({ name: 'administracion' }).save(),
      new RoleModel({ name: 'contabilidad' }).save(),
      new RoleModel({ name: 'director' }).save(),
      new RoleModel({ name: 'secretaria' }).save(),
      new RoleModel({ name: 'profesor' }).save(),
      new RoleModel({ name: 'regencia' }).save(),
      new RoleModel({ name: 'inscriptor' }).save(),
      new RoleModel({ name: 'enfermeria' }).save(),
      new RoleModel({ name: 'psicologia' }).save(),
      new RoleModel({ name: 'informaciones' }).save(),
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
    const user = await UserModel.findOne({
      email: 'admin@donboscosucre.edu.bo',
    })
    // get roles _id
    const roles = await RoleModel.find({
      name: { $in: ['admin'] },
    })
    const roleEstudiante = await RoleModel.find({
      name: { $in: ['estudiante'] },
    })

    if (!user) {
      // create a new admin user
      await UserModel.create({
        username: 'admin',
        email: 'admin@donboscosucre.edu.bo',
        password: await bcrypt.hash('Admin.22', 10),
        nombre: 'Bosco',
        appaterno: '',
        apmaterno: 'Don',
        carnet: '10000000',
        complemento: '',
        extension: 'CH',
        fecha_nacimiento: '1990-01-01',
        img: '',
        genero: 'masculino',
        celular: '206',
        roles: roles.map(role => role._id),
        niveles: ['PM', 'PT', 'SM', 'ST'],
      })
      log(chalk.blue('Admin User Created!'))

      await UserModel.create({
        username: 'estudiante',
        email: 'estudiante@donboscosucre.edu.bo',
        password: await bcrypt.hash('DonBosco.2023', 10),
        nombre: 'Juan',
        appaterno: 'Perez',
        apmaterno: 'Mendez',
        carnet: '10917763',
        complemento: '',
        extension: 'CH',
        fecha_nacimiento: '2005-11-30',
        img: '',
        genero: 'masculino',
        celular: '75794413',
        roles: roleEstudiante.map(role => role._id),
        niveles: ['SM'],
      })
      log(chalk.blue('Student User Created!'))
      // [codigoBanco, rude, unidadEducativa, dependenciaUE, distritoUE, codigoSIE-UE, curso, gestion]
    }
  } catch (error) {
    log(`${chalk.bgRed('[fatal error]')} ${chalk.red(error)}`)
  }
}

export { createRoles, createAdmin }
