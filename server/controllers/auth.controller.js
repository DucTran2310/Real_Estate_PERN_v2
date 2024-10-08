const asyncHandler = require('express-async-handler')
const db = require('../models')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const hashPassword = (password) => bcryptjs.hashSync(password, bcryptjs.genSaltSync(10))

module.exports = {

  // Login with google
  loginWithGoogle: asyncHandler(async (req, res) => {
    const { email, fullname, avatar, password } = req.body

    const alreadyUser = await db.User.findOne({ where: { email } })

    let uid = null

    if (!alreadyUser) {
      const newUser = await db.User.create({ email, fullname, avatar, password: hashPassword(password) })
      if (!newUser) {
        throw new Error('Lỗi tạo mới user')
      }

      uid = newUser.id
    } else {
      uid = alreadyUser.id
    }
    const token = jwt.sign({ uid }, process.env.SECRET_JWT_KEY, { expiresIn: '7d' })


    return res.json({
      error: !token,
      success: !!token,
      toastMessage: "Đăng nhập thành công",
      userToken: token
    })

  }),

  checkNewUserFromEmail: asyncHandler(async (req, res) => {
    const { email } = req.params

    const user = await db.User.findOne({ where: { email } })

    let token = null
    if (user) token = jwt.sign({ uid: user.id }, process.env.SECRET_JWT_KEY, { expiresIn: '7d' })

    return res.json({
      success: true,
      hasUser: !!user,
      userToken: token,
      toastMessage: token ? 'Đăng nhập thành công' : 'Bạn là thành viên mới'
    })
  })
}
