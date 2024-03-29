import mongoose from "mongoose";


const postSchema= new mongoose.Schema({

    comments:{
        type:[String],
        default:[]
    },
    title:{
        type:String
    },
    name:{
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
    },
    likeCount:{
        type:Number,
        default:0
          
    },
    creator:{type:String},
    

},{timestamps:true})

const PostsModel=mongoose.model('PostsModel',postSchema)
export default PostsModel
