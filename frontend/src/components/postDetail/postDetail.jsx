import { Box, Stack } from "@mui/material"

import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPost } from "../../actions/posts"

const PostDetail=()=>{
    const {id}=useParams()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getPost(id))
    },[id])

    return(
    <Stack>
        <Box></Box>
        <Box></Box>
          post detail page
    </Stack>)
}


export default PostDetail