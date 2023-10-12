import React from 'react'
import {Routes,BrowserRouter, Route} from 'react-router-dom'
import {Box,Stack } from '@mui/material'
import NavBar from "../src/components/NavBar/NavBar"
import Home from "../src/components/Home/Home"
import Auth from './components/Auth/Auth'
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
      <GoogleOAuthProvider clientId='1079615549728-ht5h8vjdrrmt1nkig1uhktttsaftgo49.apps.googleusercontent.com'>
      <BrowserRouter>
           <Box >
               <NavBar />
               <Routes>
                 <Route exact={true} path='/' element={<Home />}/>
                 <Route path='/auth' element={<Auth />}/>
               </Routes>
           </Box>

      </BrowserRouter>
    </GoogleOAuthProvider>       
  );
}

export default App;
