# Configuración e instalación de nuestra app

## Configuración del proyecto

### Instalación de ESLINT y PRETTIER

```shell
npm i -D eslint
npm i -D prettier
npm i -D eslint-config-prettier
```

1. **Configuración de ESLINT:**

Creamos el archivo `.eslintrc.js`, a partir de `npx`, y respondemos preguntas.

```shell
npx eslint --init
```

Archivo `.eslintrc.js`, cómo debería quedar para este proyecto.

```js
module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard', 'eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': ['never'],
  },
}
```

> Para REACT añadir:

```js
{
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  plugins: [
    'react'
  ]
}
```

Para encontrar errores y advertencias, en la ruta actual con `ESLINT`.

```shell
npx eslint ./ --fix
```

Para resolver todos los problemas de la carpeta server.

```shell
npm eslint server --fix
```

2. **Configuración de PRETTIER:**

Mostrar cambios a modificar en un archivo.

```shell
npx prettier server/index.js
```

Para que escriba los cambios agregar el flag `--write`.

```shell
npx prettier server/index.js --write
```

Crear un archivo de configuración para `PRETTIER` llamado `.prettierrc`.

```json
{
  "useTabs": false, // Usar tabs para identación
  "semi": false, // Punto y coma al final
  "singleQuote": true, // Comillas simples
  "jsxSingleQuote": true, // Comillas para jsx
  "bracketSameLine": true, // No saltar ultimo caracter de bloque de código
  "arrowParens": "avoid" // Intenar evitar parentesis en arrow functions
}
```

Formatear documento con la extención de Visual Studio Code `PRETTIER`.

Archivo `.eslintignore`.

```shell
dist
```

Archivo `.prettierignore`.

```shell
dist
package-lock.json
```

3. **Otras configuraciones**

En `package.json`.

Recomendación Visual Studio Code, en `settings`:

```json
{
  "scripts": {
    "format": "prettier --write .",
    "lint": "eslint --fix . --ext .js,.jsx"
  }
}
```

- Formatear documento por defecto con `prettier`.

- Activar: Editor: **Format On Save**.

- Configuración en User `settings.json` .

```json
{
  "editor.language.colorizedBracketPairs": [
    ["[", "]"],
    ["(", ")"],
    ["{", "}"]
  ],
  "workbench.colorCustomizations": {
    "activityBar.background": "#3344F0"
  },
  "editor.formatOnSave": true
}
```

### Despliegue del proyecto, en desarrollo y producción

**Development:**

```shell
npm start
```

**Production:**

```shell
npm run build
pm2 start dist/server/index.js --name "dbosco-db"
pm2 restart dbosco-db
```

### Scripts

```js
db.createUser({
  user: "mgary",
  pwd: "i9J$za2vOXJl",
  roles: [
    { role: "readWrite", db: "module-db" }
  ]
})
mongodb://mgary:i9J%24za2vOXJl@localhost:27017/?authMechanism=DEFAULT
mongosh -u mgary -p 'i9J$za2vOXJl'

// Probado y funcional
mongosh -u root -p example
use module-db
db.createUser({
  user:"mgary",
  pwd: "i9J$za2vOXJl",
  roles:["dbOwner"]
})
mongosh module-db -u mgary -p 'i9J$za2vOXJl'
mongodb://mgary:i9J%24za2vOXJl@localhost:27017/module-db?authMechanism=DEFAULT

db.createUser({ user: "mgary", pwd: "i9J$za2vOXJl", roles: ["userAdminAnyDatabase"] })
>mongosh -u mgary -p 'i9J$za2vOXJl'

mongo -u mgary -p 'i9J$za2vOXJl' --authenticationDatabase module-db
//DEBUG=dbosco-app*,dbosco-db:*
sudo systemctl enable redis-server
```

### ESM

```bash
node --experimental-specifier-resolution=node index.js
```

```JSON
{
  "type": "module", // Cuando estemos en desarrollo utilizamos, luego de compilar y usar babel lo quitamos
  "scripts": {
    ...
    "start": "NODE_OPTIONS='--experimental-specifier-resolution=node' node src/index.js",
    ...
  }
}
```

### Libraries important

La versión de inquirer > v9.0.0 es puro ESM.
la versión de chalk > v5.0.0 es puro ESM.

```npm
npm i -S inquirer@^8.0.0
npm i -S chalk@^4.0.0
```

### Example ESM

```js
// De COMMONJS A ESM
import { createRequire } from 'module'
const require = creareRequire(import.meta.url)

const users = require('./users.json')
console.log(users)

// De ESM a COMMONJS
import('./operaciones.mjs').then(({ suma }) => console.log(suma(4, 5)))
```

### Ejecutar el proyecto

```node
NODE_ENV=development DEBUG=dbosco-db*,db:* node setup.js
NODE_ENV=development DEBUG=dbosco-db*,db:* node server.js #Example DB
```
