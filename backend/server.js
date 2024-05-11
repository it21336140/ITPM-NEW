require('dotenv').config()

const express= require('express')

const mongoose = require('mongoose')

const GroupRoutes = require('./routes/Groups')


//express app 
const app= express()


app.use(express.json())
app.use((req,res,next)=>{
 console.log(req.path, req.method)
 next()
})

app.use('/api/groups',GroupRoutes)
//connect to database

mongoose.connect(process.env.MONG_URI)
.then(()=>{app.listen(process.env.PORT,()=>
    {
        console.log('connecting to the mongoDB Success & listening to the port number :',process.env.PORT)
    })

}).catch((error)=>{
    console.log(error)
})


//listen for request



process.env