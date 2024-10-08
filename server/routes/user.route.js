const router = require('express').Router()
const ctrls = require('../controllers/user.controller')
const { verifyToken } = require('../middlewares/verifyToken')

router.get('/me', verifyToken, ctrls.getUser)

module.exports = router
