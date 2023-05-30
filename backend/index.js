import express, { application }  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import dotenv from 'dotenv'

dotenv.config()

import postsRoute from './src/routes/postsRoute.js'
const app=express()
const PORT=process.env.PORT || 1000
// const MONGO_URL=process.env.MONGO_URL

mongoose.connect("mongodb://localhost/reduxFullStackMine").then(console.log('database connected'))
        .catch((error)=>console.log(error))

app.use('/posts',postsRoute)        
// app.get('/',(req,res)=>{
//     res.send("you so pretty")
// })

app.listen(PORT,()=>console.log(`app runing on port ${PORT}`))




