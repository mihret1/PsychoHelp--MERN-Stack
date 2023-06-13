import React from 'react'
import {Routes,BrowserRouter, Route} from 'react-router-dom'
import {Box,Stack } from '@mui/material'
import NavBar from "../src/components/NavBar/NavBar"
import Home from "../src/components/Home/Home"
import Auth from './components/Auth/Auth'
function App() {
  return (
      <BrowserRouter>
           <Box >
               <NavBar />
               <Routes>
                 <Route exact={true} path='/' element={<Home />}/>
                 <Route path='/auth' element={<Auth />}/>
               </Routes>
           </Box>

      </BrowserRouter>
           
  );
}


export default App;
