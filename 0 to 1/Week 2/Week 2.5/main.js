const express = require('express')

const app = express()

function sumLogic(n){
    let ans = 0;
    for(let i =0; i<=n; i++){
        ans = ans + i;
        console.log("i => ",i + " ans => " +ans)
    }
    return ans;
}

var user =[{
    name: "John",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]
console.log(user[0])

// assignment: 
// 1. GET = User can check how many kidneys they have and their health
// 2. POST = User can check add a new kidney
// 3. PUT = User can replace a kindey, make it healthy
// 4. DELETE = User can remvoe a kidney

app.get('/', function(req, res){
    const n = req.query.n;
    const ans = sumLogic(n)
    res.send(ans)
})

// 1. GET = User can check how many kidneys they have and their health
app.get('/kd', (req, res)=>{
    const newUser = user[0].kidneys;
    const numberOfKidneys = newUser.length;
    let numberOfHelathKidneys = 0;
    for(let i =0; i<newUser.length; i++){
        if(newUser[i].healthy){
            numberOfHelathKidneys = numberOfHelathKidneys + 1;
        }
    }
    const numberofUnhealthKidneys = numberOfKidneys - numberOfHelathKidneys;
    
    const numOfHealthKd = numberOfHelathKidneys;
    res.json({
        numberOfKidneys,
        numberOfHelathKidneys,
        numberofUnhealthKidneys,
        numOfHealthKd
    })
    console.log({numOfHealthKd})

})

app.use(express.json())

// 2. POST = User can check add a new kidney
app.post("/kd", (req, res)=>{
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!!"
    })
})

// 3. PUT = User can replace a kindey, make it healthy
app.put("/kd", (req, res)=>{
    for(let i =0; i<user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "Done!"
    })
})

// 4. DELETE = User can remvoe a unhealthy kidney
app.delete("/kd", (req, res)=>{
    const newKidneys= []
    for(let i =0; i<user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    user[0].kidneys = newKidneys;
    res.json({
        msg: "Done!"
    })
})

app.listen(3000, function(){
    console.log("Port is listining at 3000")
})