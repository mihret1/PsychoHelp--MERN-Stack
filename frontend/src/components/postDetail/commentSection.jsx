import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postComment } from '../../actions/posts'

const CommentSection=({post})=> {
    const [comment,setComment]=useState('')
    const [comments,setComments]=useState(post.comments)
    const user=JSON.parse(localStorage.getItem('profile'))

    const dispatch=useDispatch()


    const handleComment=async()=>{
        const finalComment=`${user?.result?.name}:${comment}`
        const newComment= await dispatch(postComment(finalComment,post._id))
        setComments(newComment)
        setComment('')
    }

  return (
    <div>
          <Stack>
            comments
            {comments?.map((c,i)=>(
            <h3>{c}</h3>
            ))}
        </Stack>
        <h1>write comments here bro</h1>
    
        <TextField 
           onChange={(e)=>setComment(e.target.value)} 
           value={comment}
           label='write ur comment'/>
           
        <Button variant='contained' onClick={handleComment}>
                 comment
        </Button>
    </div>
  )
}


export default CommentSection