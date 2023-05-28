import { Box } from "@mui/material";
import React from "react";
import Post from "./Post/Post";
import {Grid} from "@mui/material"

const Posts=()=>{

 const p=[1,2,3,4,5,6,7,8,9,10,11]

    return(
        <Box>
            <Grid container spacing={4}>
              {p.map((e)=>(
                 <Grid item lg={6} md={6} sm={12} xs={12}>
                   <Post />

                 </Grid>
              ))}
            </Grid>
           
        </Box>
    )
}


export default Posts