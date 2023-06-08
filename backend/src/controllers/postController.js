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
        const newpost= await PostsModel.create(post)
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
      const post =await PostsModel.findById(id)
      if(!post) return res.status(404).send('no post to delete')

      await PostsModel.findByIdAndDelete(id)
      res.status(200).send('delete success')
   }catch(error){
    res.status(404).json(error)
  }
}

export const updatePost=async(req,res)=>{
    try{

        const  post=req.body
        const {id}=req.params

        if(!id){
            res.status(409).json({err:'enter id'})
        }
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("incorrect id")

        const postt =await PostsModel.findById(id)
        if(!postt) return res.status(404).send('no post to update')
          
        const updatedPost= await PostsModel.findByIdAndUpdate(id,post,{new:true})
        res.json(updatedPost)

    }catch(error){
        console.log(error)

    }
   
    
}



export const likePost=async(req,res)=>{

    try{

        const {id}=req.params
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("incorrect id")
     const post= await PostsModel.findById(id)
     const updatedPost= await PostsModel.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true})
     res.json(updatedPost)

    }catch(error){
        console.log(error)


    }
     


    

}