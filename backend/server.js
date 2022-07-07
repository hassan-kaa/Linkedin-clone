require('dotenv').config()
const express= require('express')
const mongoose=require('mongoose')
const postsRoutes=require('./routes/posts')
const cors = require('cors')
//express app
const app=express()

//middleware

app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({limit: "30mb",extended:true}));
app.use(cors())
app.use((req,res,next)=>{
    console.log(req.path , req.method , req.body )
    next()
})

//the next function invoques the next middleware 

//routes
app.use(postsRoutes)


//connect to the db
mongoose.connect(process.env.MONGO_URI).then(()=>{
    // listen for requests
app.listen(process.env.PORT,()=>{
    console.log(`connected to db & listening on port ${process.env.PORT} `)
})

}).catch((error)=>{console.log(error)})
