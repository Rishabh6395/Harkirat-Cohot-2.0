const express = require('express')
const cors = require('cors')
const userRouter = require('./Routes/User')
const app = express()


app.use(cors())

app.use(express.json()) 
app.use('/api/user', userRouter)

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
