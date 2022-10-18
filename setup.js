import inquirer from 'inquirer'
import chalk from 'chalk'
import minimist from 'minimist'
import { config } from 'dotenv'

import MongoDB from './server/index.js'
import { createRoles, createAdmin } from './server/libs/initialSetup.js'

config()
const args = minimist(process.argv)
const prompt = inquirer.createPromptModule()
const log = console.log

async function setup() {
  if (!args.yes) {
    const answer = await prompt([
      {
        type: 'confirm',
        name: 'setup',
        message: 'Esto destruirá tu base de datos. ¿Estás seguro?',
      },
    ])

    if (!answer.setup) {
      return log(chalk.blue('No pasó nada 😀'))
    }
  }

  const config = {
    dbUser: process.env.DB_USER || 'root',
    dbPassword: process.env.DB_PASSWORD || 'example',
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: process.env.DB_PORT || 27017,
    dbName: process.env.DB_NAME || 'module-db',
  }

  const db = new MongoDB(config)
  const conex = await db.connect().catch(handleFatalError)

  // DROP DATABASE!
  await conex.connection.db.dropDatabase()
  log(chalk.yellow('DELETED DATABASE!'))

  await createRoles()
  await createAdmin()

  log(`${chalk.bgGreen('[DB Setup]')} ${chalk.green('¡Éxito!')}`)
  process.exit(0)
}

function handleFatalError(err) {
  log(`${chalk.bgRed('[Fatal Error]')} ${chalk.red(err.message)}`)
  log(err.stack)
  process.exit(1)
}

setup()
