import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Posts from "../Posts/Posts";
import  Form from "../Form/Form"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

 const Home=()=>{
    const posts=useSelector((state)=>state.posts)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getPosts())
    },[])
    useEffect(()=>{
        dispatch(getPosts())
    },[posts])

    return(
        <Grid container className="home"  spacing ={3} style={{marginTop:"6px"}} >

           <Grid item lg={8} md={8} sm={6} xs={12} >  <Posts posts={posts}/></Grid>
           <Grid item lg={4} md={4} sm={6} xs={12}> <Form /></Grid>

        </Grid>
    )
}


export default Home