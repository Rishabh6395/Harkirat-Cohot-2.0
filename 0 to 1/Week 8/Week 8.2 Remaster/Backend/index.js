const express = require('express')
const app = express()
const rootRouter = require('./Routes/index.js')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use("/api/v1", rootRouter)

app.get("/", (req, res) => {
    res.send('Hello home route')
})



app.listen(3000, ()=>{
    console.log("app is running on 3000 port")
})