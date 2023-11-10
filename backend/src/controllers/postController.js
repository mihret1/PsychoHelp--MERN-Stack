import express from 'express'
import PostsModel from '../models/postModel.js'
import mongoose from 'mongoose'
import auth from '../middlewares/auth.js'
const app=express()


export const getPosts=async(req,res)=>{
    const {page}=req.query
    try{
        const LIMIT=8
        const startIndex=(Number(page)-1)*LIMIT
        const total= await PostsModel.countDocuments({})
        const posts= await PostsModel.find().sort({_id:-1}).limit(8).skip(startIndex)
        res.status(200).json({data:posts,numberOfPage:Math.ceil(total/LIMIT),currentPage:Number(page)})

    }catch(error){
        res.status(400).json({err:error.message})
         console.log(error)
    }

}

export const getPost=async(req,res)=>{
    try{
        const {id}=req.params
        const post=await PostsModel.findById(id)
        res.status(200).json(post)
    }catch(error){
        res.status(404).json({Your_err:error.message})
    }
}


export const  getPostsBySearch=async(req,res)=>{
       const {searchQuery,tags}=req.query
    try{
        const title= new RegExp(searchQuery,"i")
        // const posts=  await  PostsModel.find({$or:[{title:title},{tags:{$in:tags.split(',')}}]})
        const posts = await  PostsModel.find({$or:[{ title },{ tags: { $in: tags.split(',') } } ]});
        
        res.json({data:posts})

    }catch(error){
        res.status(404).json({errorMessage:error.message})

    }
}


export const createPost =async(req,res)=>{

    try{
        const post =req.body
        const newpost= await PostsModel.create({...post,creator:req.userId})
        res.status(201).json(newpost)
        // console.log(newpost)

    }catch(error){
        res.status(409).json({err:error})

    }
   
    
}

export const deletePost=async(req,res)=>{
  try{
    const { id }=req.params
    
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
