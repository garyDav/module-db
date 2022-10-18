import mongoose from 'mongoose'
import Debug from 'debug'
import config from './config/index.js'

class MongoDB {
  debug = Debug('module-db:server')
  mongodb_uri = null
  db = null

  constructor(_config) {
    if (!_config) {
      this.mongodb_uri = config.mongodb_uri
      return
    }

    Object.assign(this, _config)
    const USER = encodeURIComponent(this.dbUser)
    const PASSWORD = encodeURIComponent(this.dbPassword)
    this.mongodb_uri = `mongodb://${USER}:${PASSWORD}@${this.dbHost}:${this.dbPort}/${this.dbName}`
  }

  async connect() {
    if (!this.db) {
      this.db = await mongoose.connect(this.mongodb_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    }

    this.debug('CLIENT CONNECTED TO DATABASE...')
    return this.db
  }

  getDB() {
    return this.db
  }
}

export default MongoDB
