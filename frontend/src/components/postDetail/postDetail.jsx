import { Box, CircularProgress, Stack } from "@mui/material"

import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPost, getPostBySearch } from "../../actions/posts"
import { useSelector } from "react-redux"
import moment from "moment"
import { useNavigate } from "react-router-dom"
import CommentSection from "./commentSection"

const PostDetail=()=>{
  const navigate=useNavigate()
    const { id }=useParams()
    const dispatch=useDispatch()
    // const {post,isLoading}=useSelector((state)=>state.posts)
    const { post, posts, isLoading } = useSelector((state) => state.posts);


    useEffect(()=>{
        dispatch(getPost(id))
    },[id])


    // useEffect(()=>{
    //   dispatch(getPostBySearch({search:'none',tags:post?.tags.join(',')}))
    // },[post])
    // const reccomedationPost=posts.filter(({_id}) => _id !==post._id)
    // const openPost=(_id)=>navigate(`/posts/${_id}`)

    if(!post) return null

     if(isLoading) return <CircularProgress />


    return(
        <Box>
           <h1 style={{ textAlign:'center',marginBottom:10 }}> Detail page</h1>

         <Stack m={3} pl={3} direction='row' spacing={2} sx={{ borderRadius:3,boxShadow:3 }} >
           <Stack spacing={2} p={1} sx={{ width:600 }}>

            <h2>{post.title}</h2>
            <h3>{post.tags.map((tag)=>(`#${tag}`))}</h3>
            <h4>created by :{post.name}</h4>
            <p>{post.message}</p>
            <h4>created At: {moment(post.createdAt).fromNow()}</h4>

          </Stack>
        <Box>
            <img 
            src={post.selectedFile}
            alt="photo of post"
            style={{ width:670,height:400 }}
            />
        </Box>
    </Stack>
    <div>
      <CommentSection post={post}/>

    </div>

  
  {/* {!!reccomedationPost.length && <Stack direction='row' spacing={2}>
     { reccomedationPost.map((r)=>(
      <Box  onClick={()=>openPost(r._id)} sx={{ height:100,width:100 }}>
        <img src={r.selectedFile}/>
        {r.name}
        {r.title}
        {r.message}
        
      </Box>
     ))}
    </Stack>
  } */}
    </Box>)
}


export default PostDetail