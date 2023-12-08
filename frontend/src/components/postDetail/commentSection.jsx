import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { postComment } from '../../actions/posts'




const CommentSection=({post})=> {
    const [comment,setComment]=useState('')
    const [comments,setComments]=useState(post.comments)
    const user=JSON.parse(localStorage.getItem('profile'))
    const commentRef=useRef()

    const dispatch=useDispatch()


    const handleComment=async()=>{
        const finalComment=`${user?.result?.name}:${comment}`
        const newComment= await dispatch(postComment(finalComment,post._id))
        setComments(newComment)
        setComment('')
        commentRef.current.scrollIntoView({ behavior: 'smooth' });
      }

  return (
    <div>
      <Stack direction='row' spacing={2}>
            <Stack>
            comments

            {comments?.map((c,i)=>(
            <h3>{c}</h3>
            ))}
            <div ref={commentRef}/>
          </Stack>
    <Box>
      <h1>write comments here bro</h1>
    
    <TextField 
       onChange={(e)=>setComment(e.target.value)} 
       value={comment}
       label='write ur comment'/>
       
    <Button variant='contained' onClick={handleComment}>
             comment
    </Button>
  </Box>

        </Stack>
       
    </div>
  )
}


export default CommentSection