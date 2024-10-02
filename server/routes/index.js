const { badRequestException, errHandler } = require('../middlewares/errorHandle')
const auth = require('./auth.route')

const initRoutes = (app) => {
  app.use('/api/v1/auth', auth)

  app.use("/", badRequestException)
  app.use(errHandler)
}

module.exports = initRoutes