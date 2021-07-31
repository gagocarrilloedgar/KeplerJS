const body2latlong = require('./src/Core/body2latlong')
const app = require('./src/app')

const port = process.env.PORT || 5000

if (process.env.NODE_ENV === 'development') {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
}

module.exports = body2latlong
