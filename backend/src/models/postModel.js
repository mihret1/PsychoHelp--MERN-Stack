import mongoose from "mongoose";


const postSchema= new mongoose.Schema({
    title:{
        type:String
    },
    tags:{
        type:[String],
        default:[]
    },
    message:{
        type:String
    },
    selectedFile:{
        type:String
    },
    createdAt:{
        type:Date,
        default:new Date()
    }




},{timestamps:true})

const PostsModel=mongoose.model('PostsModel',postSchema)

export default PostsModel