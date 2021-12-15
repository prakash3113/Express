const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const PORT = 3500;
const router = require('./routes')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(router)

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"))
})




app.listen(PORT, (req, res)=>{
    console.log(`server started at ${PORT}`)
})
