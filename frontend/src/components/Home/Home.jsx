import { Box, Grid } from "@mui/material";
import React from "react";
import Posts from "../Posts/Posts";
import  Form from "../Form/Form"


 const Home=()=>{

    return(
        <Grid container className="home"  spacing ={3} style={{marginTop:"6px"}} >

           <Grid item lg={8} md={8} sm={6} xs={12} >  <Posts /></Grid>
           <Grid item lg={4} md={4} sm={6} xs={12}> <Form /></Grid>

        </Grid>
    )
}


export default Home