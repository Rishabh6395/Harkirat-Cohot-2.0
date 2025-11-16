const express = require('express')
const app = express()
const userRouter = require('./user')
const accountRouter = require('./account')


const router = express.Router()

router.use('/user', userRouter)
router.use('/update', userRouter)
router.use('/account', accountRouter)
router.use('/balance', accountRouter)

module.exports = {
    router
}