import React from 'react'
import {Routes,BrowserRouter, Route} from 'react-router-dom'
import {Box,Stack } from '@mui/material'
import NavBar from "../src/components/NavBar/NavBar"
import Home from "../src/components/Home/Home"

function App() {
  return (

           <Box >
               <NavBar />
               <Home />
           </Box>
           
  );
}


export default App;
