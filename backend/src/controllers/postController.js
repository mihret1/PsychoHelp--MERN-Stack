import express from 'express'
import PostsModel from '../models/postModel.js'
import mongoose from 'mongoose'
const app=express()


export const getPosts=async(req,res)=>{
    try{
        const posts= await PostsModel.find()
        res.status(200).json(posts)
    }catch(error){
        res.status(400).json({err:error.message})
         console.log(error)
    }

}


export const createPost=async(req,res)=>{

    try{


        const post =req.body
        const newpost= await PostsModel.create({...post,createdAt:new Date().toISOString()})
        res.status(201).json(newpost)

    }catch(error){
        res.status(409).json({err:error})

    }
   
    
}
export const deletePost=async(req,res)=>{
  try{
    const {id}=req.params
    if(!id){
        res.status(409).json({err:'enter id'})
    }


      if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with this id')

      if(!PostsModel.findById(id)) return res.status(404).send('no post to delete')
      await PostsModel.findByIdAndDelete(id)
      res.send('delete success')
   }catch(error){
    res.status().json(error)
  }
}

export const updatePost=async(req,res)=>{
    try{

        const  post=req.body
        const {id}=req.params
        if(!id) return  res.send('enter id')
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("incorrect id")
        if(!PostsModel.findById(id)) return res.send('no post by this id')
        const updatedPost= await PostsModel.findByIdAndUpdate(id,post,{new:true})
        res.status(200).json(updatedPost)

    }catch(error){

    }
   
    
}