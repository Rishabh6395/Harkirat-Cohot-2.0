// Middlewares And Global Catches
const express = require('express')

const app = express()

// app.get('/', (req, res)=>{
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const KidneyId = req.query.KidneyId;

//     if(!(username === 'Rishabh' && password === 'Pass')){
//         res.status(400).json({msg: "Something up with your input"})
//         return
//     }

//     if(KidneyId !=1 && KidneyId !=2){
//         res.status(400).json({msg: "ssomething up with your input"})
//         return
//     }
//     res.json({
//         msg: "Your kidney is fine!!"
//     })
// })


// let numOfReq =0;

// function calculateRequest(req, res, next){
//     numOfReq++;
//     console.log(numOfReq)
//     next()
// }
// app.use(calculateRequest)


// app.post('/lol', (req, res)=>{
//     res.json({
//         msg: "hey there"
//     })
// })

app.use(express.json())

// app.post('/newlol', (req, res)=>{
//     const kidney = req.body.kidney
//     const kidneyLeng= kidney.length 
//     res.send("you have" + kidneyLeng + "kidneys")
// })

app.post('/newlol', (req, res) => {
  const kidney = req.body.kidney;
  const kidneyLeng = kidney.length;
  res.send("You have " + kidneyLeng + " kidneys");
});


app.listen(3000, ()=>{
    console.log("Your port is listneing at 3000")
})