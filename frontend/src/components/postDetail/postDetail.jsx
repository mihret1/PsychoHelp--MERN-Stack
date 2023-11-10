import { Box, CircularProgress, Stack } from "@mui/material"

import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPost } from "../../actions/posts"
import { useSelector } from "react-redux"
import moment from "moment"
const PostDetail=()=>{
    const {id}=useParams()
    const dispatch=useDispatch()
    const {post,isLoading}=useSelector((state)=>state.posts)

    useEffect(()=>{
        dispatch(getPost(id))
    },[id])
 
    if(!post) return null

     if(isLoading) return <CircularProgress />


    return(
    <Stack direction='row' spacing={4} >
        <Stack spacing={2}>
        <h1>Detail page</h1>

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
            />
        </Box>
    </Stack>)
}


export default PostDetail