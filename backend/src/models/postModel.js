import mongoose from "mongoose";


const postSchema= new mongoose.Schema({
    title:String,
    tags:{
        type:[String],
        default:[]
    },
    message:String,
    selectedFile:String,
    createdAt:{
        type:Date,
        default:new Date()
    }




})

const PostsModel=mongoose.model('PostsModel',postSchema)

export default PostsModel