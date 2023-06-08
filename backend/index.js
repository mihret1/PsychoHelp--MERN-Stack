import express, { application }  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

import postsRoute from './src/routes/postsRoute.js'
const app=express()
const PORT=process.env.PORT || 1000

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

app.use(cors())
app.use('/posts',postsRoute) 

// mongoose.connect("mongodb://127.0.0.1/reduxFullStackMine",{useNewUrlParser:true,useUnifiedTopology:true})
// .then(()=>app.listen(PORT,()=>{
//     console.log(`backend is running on port ${PORT} and database is connected`)
// }))
// .catch((error)=>console.log(error.message))


// const connection= async()=>{
//         try{
//                 await  mongoose.connect("mongodb://localhost/reduxFullStackMine",{useNewUrlParser:true,useUnifiedTopology:true})
//                 .then(console.log('database connected'))
//                 .catch((error)=>console.log(error))
//         }catch(error){

//         }

// }

// connection()

 mongoose.connect("mongodb://localhost/reduxFullStackMine",{useNewUrlParser:true,useUnifiedTopology:true})
        .then(console.log('database connected'))
        .catch((error)=>console.log(error))


       

// app.get('/',(req,res)=>{
//     res.send("you so pretty")
// })

app.listen(PORT,()=>console.log(`app runing on port ${PORT}`))




