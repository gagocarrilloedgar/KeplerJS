// Extended: https://swagger.io/specification/#infoObject
const { version } = require('../../package.json')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: version,
      description: 'A simple Express Library API'
    },
    servers: [
      {
        url: 'http://localhost:5000'
      }
    ]
  },
  apis: ['./src/routes/**.js']
}

module.exports = { options }
