import { Box,Typography,Paper,Button } from "@mui/material";
import React from "react";
import image3 from "../assets/image3.jpg"

import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import {Stack,Avatar} from '@mui/material';
import  { useEffect, useState } from "react";
import { Link, useHistory, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";



const NavBar=()=>{
   const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile')) )
   const location=useLocation()
   const dispatch=useDispatch()
   const navigate=useNavigate()

   useEffect(()=>{
      setUser(JSON.parse(localStorage.getItem('profile')))
   },[location])

   const Logout=()=>{

      dispatch({type:'Logout'})
      setUser(null)
      navigate('/auth')


   } 

    return(
         
         <Box bgcolor="black"   style={{}}>
             <AppBar position="fixed"  style={{backgroundColor:'black', padding:"1%"}} >
               <Toolbar>
                
                <Typography variant="h4" sx={{  marginRight:{lg:"57%",md:"40%", sm:"20%",xs:"5%" },marginBottom :"2%" }}>
                   <Link to='/' style={{textDecoration:'none',color:'white'}}>PsychoHelp </Link>   
                </Typography> 
              { 
                 user?.result ?(
                <Stack  spacing={2} direction ={{xs:'column',md:'row',sm:"row",lg:'row'}}>
                   <Avatar alt="Remy Sharp" src={image3} />
                  <Typography variant="h5">{user?.result?.name}</Typography>
                  <Button onClick={Logout} variant="contained"  sx={{ marginBottom :"2%" }}>Logout</Button>
                </Stack>)
                :(
                   <Button variant="contained"  sx={{ marginBottom :"2%" }}><Link to="/auth" style={{textDecoration:'none',color:'white'}}>Sign In</Link></Button>
                )
                }

            </Toolbar>
           </AppBar>
           <Box sx={{boxShadow: 3}}>
           <img src={image3 } alt="navbar image" style={{width:"100%" , height:"300px"}}/>
           <Typography variant="h5" align="center" pl={8} pr={8} color="white" mt={4} pb={5}>
              your problems is mine to so come lets talk about it and solve it together.
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to 
              demonstrate the visual form of a document or a typeface without relying on meaningful 
              content.
           </Typography>  
           </Box>      
        </Box>
      
    )
}

export default NavBar