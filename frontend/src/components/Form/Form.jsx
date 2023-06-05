import { Box, Paper, Stack, TextField, Typography ,Button} from "@mui/material";
import React, { useEffect, useState } from "react";
import FileBase from 'react-file-base64';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";


 const Form=({currentId,setCurrentId})=>{
    const dispatch=useDispatch()
    
    const [postData,setPostData]=useState({
      title:'',
      creator:'',
      message:'',
      selectedFile:'',
      tags:''
  })
    const postt=useSelector((state)=>state.posts)
    const WillupdatePost=postt.find((p)=>currentId? p._id===currentId:null )

    // const WillupdatePost=useSelector((state)=>currentId? state.posts.find((p)=>p._id===currentId):null)

    useEffect(()=>{
      if(currentId){
        setPostData(WillupdatePost)
      }
    },[currentId])
    
  

    
        const handleSubmit=(e)=>{
          e.preventDefault()
          if(currentId) {
            dispatch(updatePost(currentId,postData))

          }else{
            dispatch(createPost(postData))

          }
          clear()

            

        }

       

       

      const clear=()=>{
        setPostData({
            title:'',
            creator:'',
            message:'',
            selectedFile:'',
            tags:''
        })

        setCurrentId(null)
      }

    return(
        <Box p={3}>
            <Paper>
              <form onSubmit={handleSubmit}>
              <Box pl={10} mb={1} style={{backgroundColor:'black',height:"80px" }}>  
                   <Typography pt={3}variant="h5" style={{color:'white'}}> {currentId ? 'Update':'Create'} Your Post</Typography>
                </Box>
                <Stack spacing={2}>

               
                <TextField
                    
                    label="Creator"
                    value={postData.creator}
                    onChange={(e)=>setPostData({...postData,creator:e.target.value})}
                    
                   /> 
                <TextField
                    
                    label="Title"
                    value={postData.title}
                    onChange={(e)=>setPostData({...postData,title:e.target.value})}
                    
                    
                   /> 
                   <TextField
                    
                    label="Message"
                    value={postData.message}
                    onChange={(e)=>setPostData({...postData,message:e.target.value})}
                    
                    
                   /> 
                   <TextField
                    
                    label="Tags"
                    value={postData.tags}
                    onChange={(e)=>setPostData({...postData,tags:e.target.value.split(',')})}
                    
                    
                   />
                   
                   <FileBase 
                         type="file"
                         multiple={false}
                         onDone={({base64}) => setPostData({...postData,selectedFile:base64})}

                    />
                    <Button variant="contained" type="submit"> {currentId ? 'Update':'Submit'}</Button>

                    <Button variant="contained" color="error" onClick={clear}> Clear</Button>

                   </Stack>  
                </form>
            </Paper>
        </Box>
    )
}


export default Form