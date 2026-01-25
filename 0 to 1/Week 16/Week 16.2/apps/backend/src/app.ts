import express from "express"

const app = express()

app.get("/", (req, res)=>{
    res.json({
        messsage: "hello world!"
    })
})

app.listen(3000)