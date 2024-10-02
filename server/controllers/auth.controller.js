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

    if(!alreadyUser) {
      const newUser = await db.User.create({email, fullname, avatar, password: hashPassword(password)})
      if(!newUser) {
        throw new Error('Lỗi tạo mới user')
      }

      uid = newUser.id
    }

    uid = alreadyUser.id
    const token = jwt.sign({uid}, process.env.SECRET_JWT_KEY, {expiresIn: '7d'})

    // Loại bỏ password khỏi đối tượng user trước khi trả về
    const { password: pwd, ...userWithoutPassword } = alreadyUser.dataValues;

    return res.json({
      error: !token,
      success: !!token,
      userWithoutPassword,
      toastMessage: "Sign In is successfully",
      userToken: token
    })

  })
}
