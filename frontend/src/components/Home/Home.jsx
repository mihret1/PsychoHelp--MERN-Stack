import { Box, Grid } from "@mui/material";
import React, { useEffect ,useState} from "react";
import Posts from "../Posts/Posts";
import  Form from "../Form/Form"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Paginationn from "../Posts/pagination";
import { useLocation } from "react-router-dom";


function useQuery(){
    return new URLSearchParams(useLocation().search)

}

 const Home=()=>{
    const [currentId,setCurrentId]=useState(null)
    // const posts=useSelector((state)=>state.posts)
    // const dispatch=useDispatch()
    const query=useQuery()
    const page=query.get('page') || 1

    


    return(
        <Grid container className="home"  spacing ={3} style={{marginTop:"6px"}} >

           <Grid item lg={8} md={8} sm={6} xs={12} ><Posts setCurrentId={setCurrentId}/></Grid>
           <Grid item lg={4} md={4} sm={6} xs={12}>
            <Form   currentId={currentId}  setCurrentId={setCurrentId}/>
             <Paginationn page={page} />
            </Grid>
        </Grid>
        
    )
}


export default Home