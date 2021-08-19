const express = require('express')
const app = express()
const routes = require('./routes/index')
const expressJSDocSwagger = require('express-jsdoc-swagger')

const { options } = require('./docs/swaggerDef')

app.use('/', routes)
expressJSDocSwagger(app)(options)

module.exports = app
