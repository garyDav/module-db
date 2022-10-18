import { config } from 'dotenv'

config()

export default {
  mongodb_uri: process.env.MONGODB_URI || 'mongodb://localhost/dbosco-app',
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
}
