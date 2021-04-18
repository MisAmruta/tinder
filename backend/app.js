const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const {MONGOURI } = require('./Keys')
const app = express()
const PORT = process.env.PORT || 5000
require('./model/user')
app.use(cors())
app.use(express.json())
app.use(require('./routes'))

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
    
})

mongoose.connection.on('connected',()=>{
    console.log("connected to mongoose!!")
})
mongoose.connection.on('error',(err)=>{
   console.log("error generated!!",err)
})



app.listen(PORT,()=>{
    console.log('server is running..')
})