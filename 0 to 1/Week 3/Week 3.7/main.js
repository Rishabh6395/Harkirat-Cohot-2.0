const express = require('express')
const jwt = require("jsonwebtoken")
const jwtPassword = "123456"

const app = express()
app.use(express.json())

const ALL_USERS = [
    {
        username: "rishabh.bhatt@gmail.com",
        password: "123",
        name: "rishabh bhatt"
    },
    {
        username: "harkirat@gmail.com",
        password: "1234",
        name: "harkirat singh"
    },
    {
        username: "priya@gmail.com",
        password: "12345",
        name: "priya singh"
    },
]


function userExists(username, password){
    for(let i =0; i<ALL_USERS.length; i++){
        if(username == ALL_USERS[i].username && password == ALL_USERS[i].password){
            return true;
        }
    }
    return false;
}

// console.log(userExists("harkirat@gmail.com"))

app.post("/signin", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User does not exist"
        })
    }
    var token = jwt.sign({username: username}, jwtPassword)
    return res.json({
        token
    })
})

app.get("/users", (req, res)=>{
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword)
        const username = decoded.username

        res.json({
            users: ALL_USERS
        })
    }
    catch(err){
        return res.status(403).json({
            msg: "Invalid Token"
        })
    }
})

app.listen(3000, ()=>{
    console.log("code is listing at 3000")
})