import { Box } from "@mui/material";
import React from "react";
import Post from "./Post/Post";
import {Grid} from "@mui/material"
import { useSelector } from "react-redux";

const Posts=({setCurrentId})=>{

  const posts=useSelector((state)=>state.posts)


    return(
        <Box>
            <Grid container spacing={4}>
              {posts.map((post)=>(
                 <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Post post={post} setCurrentId={setCurrentId} />

                 </Grid>
              ))}
            </Grid>
           
        </Box>
    )
}


export default Posts