const express = require ('express')
const router = require('./routes/route')
const connectionDB = require('./config/db')
require ('dotenv').config()

const app = express()

app.use(express.json())
app.use('/api', router)

app.use('/api/health',(req, res) =>{
    res.json({msj:'Api is OK'})
})


connectionDB()

app.listen(process.env.PORT,() => {
    console.log(`running on ${process.env.PORT}`);
    
})