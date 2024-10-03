const asyncHandler = require('express-async-handler')
const db = require('../models')

module.exports = {
  getUser: asyncHandler((req, res) => {
    const {uid} = req.user
  })
}
