const asyncHandler = require('express-async-handler')
const db = require('../models')

module.exports = {
  getUser: asyncHandler(async (req, res) => {
    const {uid} = req.user

    const infoUser = await db.User.findByPk(uid, {
      attributes: { exclude: ['password', 'resetPwdExpiry',  'resetPwdToken'] }
    })

    return res.json({
      success: true,
      error: false,
      infoUser 
    })
  })
}
