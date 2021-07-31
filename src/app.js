const express = require('express')
const app = express()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const routes = require('./routes/index')
const { options } = require('./docs/swaggerDef')

const specs = swaggerJsDoc(options)

app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(specs, {
    explorer: true
  })
)

app.use('/', routes)

module.exports = app
