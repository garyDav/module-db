# Module DB

```js
//import MongoDB, { AgentServiceDB, MetricServiceDB, UserServiceDB, UserModel, RoleModel, ROLES } from 'dbosco-db'
import MongoDB from './server/index.js'
import config from './server/config/index.js'

async function setup() {
  const {
    dbUser = 'root',
    dbPassword = 'example',
    dbHost = 'localhost',
    dbPort = 27017,
    dbName = 'module-db',
    dbAuth = 'module-db',
  } = config

  const db = new MongoDB({ dbUser, dbPassword, dbHost, dbPort, dbName, dbAuth })
  await db.connect()
}

setup()
```
