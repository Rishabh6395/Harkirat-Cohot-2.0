// Creating HTTP Server

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', function(req, res){
    res.send("<b> Hello rishabh</b>")
})

app.post('/convo', function(req, res){
    console.log(req.headers["authorization"])
    console.log(req.body)
    res.send({
        msg: "2+2 = 4"
    })
})

app.listen(port, function(){
    console.log(`Example app is listing at PORT ${port}`)
})