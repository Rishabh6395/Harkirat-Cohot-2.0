const {Router} = require('express')
const router = Router()
const {User} = require("../db/db.js")

router.post('/signup', async (req, res) => {
    try {
        const {firstname, lastname, email, password} = req.body;

        const existingUser = await User.findOne({email: email});
        
        if(existingUser){
            return res.json({msg: "User already exists"});
        }

        await User.create({
            firstname,
            lastname,
            email,
            password
        });

        res.json({msg: "User created successfully"});
        
    } catch (error) {
        res.status(500).json({msg: "Something went wrong!"});
    }
});

router.get('/login', async (req, res) => {
    try {
        const {email,password} = req.body;

        const user = await User.findOne({email})

        if(!user){
        return res.status(400).json({message: "Invalid email or password"})
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(400).json({message: "Invalid email or password"})
    }
    } catch (error) {
        
    }
})

module.exports = router;