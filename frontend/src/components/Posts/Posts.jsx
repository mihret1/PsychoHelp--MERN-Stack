import { Box } from "@mui/material";
import React from "react";
import Post from "./Post/Post";
import {Grid} from "@mui/material"

const Posts=({posts})=>{



    return(
        <Box>
            <Grid container spacing={4}>
              {posts.map((post)=>(
                 <Grid item lg={6} md={6} sm={12} xs={12}>
                   <Post post={post} />

                 </Grid>
              ))}
            </Grid>
           
        </Box>
    )
}


export default Posts