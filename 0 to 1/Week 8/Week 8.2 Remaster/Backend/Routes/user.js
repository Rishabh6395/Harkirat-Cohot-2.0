const express = require('express')
const router = express.Router()
const {User} = require('../DB/db.js')
const zod = require('zod')
const {JWT_SCRETE} = require('../config.js')
const jwt = require('jsonwebtoken')

const signupBody = zod.object({
    firstname: zod.string(),
    lastname: zod.string(),
    email: zod.string().email(),
    password: zod.string()
})

router.post('/signup', async (req, res) => {
    const { success } = signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Email already taken / incorrect inputs"
        })
    }
    const existingUser = await User.findOne({
        username: req.body.username
    }) 

    if(existingUser){
        return res.status(411).json({
            message: "Email already taken / incorrect inputs"
        })
    }
    const user = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    })
    const userid = user._id;

    const token = jwt.sign({
        userid
    }, JWT_SCRETE)

    res.json({
        msg: "User created successfully",
        token: token
    })

})

const signinBody = zod.object({
    email: zod.string().email,
    password: zod.string()
})

router.post("/signin", async(req, res) => {
    const {success} = signinBody.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            msg: "Incorrect inputs"
        })
    }


    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if(user){
        const token = jwt.sign({
            userid: user._id
        }, JWT_SCRETE)

        res.json({
            token: token
        })
        return
    }

    res.status(411).json({
        msg: "Error while logging in"
    })
})


module.exports= {
    router
}