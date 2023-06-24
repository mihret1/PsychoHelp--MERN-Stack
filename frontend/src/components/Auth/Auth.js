import React, { useState } from "react";
import { Box ,Stack,Button, Typography, Grid} from "@mui/material";
import image from '../assets/mi3.jpg'
import TextField from '@mui/material/TextField';
import { GoogleLogin,googleLogout } from "@react-oauth/google";
import {SignUp,SignIn} from '../../actions/auth'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import jwt_decode from 'jwt-decode'

export default function Auth(){
    const [isSignup,setIsSignup]=useState(true)
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const [userData,setUserData]=useState({ 
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confrimPassword:''

    })

    const onChangeHandler=(e)=>{
        setUserData({...userData, [e.target.name]:e.target.value})

    }

    const changeSignup=()=>setIsSignup((prev)=>!prev)



    const handleSubmit=(e)=>{
      e.preventDefault()

    if(isSignup){
        dispatch(SignUp(userData,navigate))
    }else{
        dispatch(SignIn(userData,navigate))
    }


    }


    
   const handleGoogle=(response)=>{
          const data=jwt_decode(response?.credential)
          const token=response.clientId

          try{
            dispatch({type:Auth,data:{result:data,token:token}})
            navigate('/')

           }catch(error){
            console.log(error)

          }       
   } 



   const googleFail=(error)=>{
    console.log(error)
   }




    return(
        <Box style={{color:'grey'}} bgcolor="" pr={13} pl={15} pt={7}  pb={10}>
        <Grid container  sx={{boxShadow:4}} >
            <Grid item lg={6} bgcolor=''  > 
                <img src={image}   style={{height:"595px",width:"560px"}}  alt='photo'/>
            </Grid>
            <Grid item lg={6} bgcolor='white'  pt={3} pl={6} pr={6}  pb={3}> 
            <Typography variant="h6" mb={3} ml={22}>Welcome</Typography>
            <Typography ml={22}>SignUp Here</Typography>
              <form onSubmit={handleSubmit} >
                <Stack direction='column'spacing={3}  >
                    {isSignup && 
                      <Box>
                        <TextField

                          label="FirstName"
                          onChange={onChangeHandler}
                          name="firstname"
                        />
                        <TextField
                  
                        label="LastName"
                        onChange={onChangeHandler}
                        name="lastname"
                      />
                    </Box>
                  }
             <Box>
             <TextField
                 label="email"
                 onChange={onChangeHandler}
                 name="email"
             />
          
             <TextField
                 label="password"
                 type="password"
                 name="password"
                 onChange={onChangeHandler}
             />

            {isSignup &&
              <TextField
              label="confrimPassword"
              name="confrimPassword"
              type="password"
              onChange={onChangeHandler}
             />}
             </Box>
             <Button variant="contained" type='submit' >{isSignup ?'SignUp':'SignIN'}</Button>
            

         
              <GoogleLogin 
                 onSuccess={handleGoogle}
                 onError={googleFail}
              />
                  
              <Button onClick={changeSignup}><Typography>{isSignup ? 'already have account ? Login...' : 'dont have account ? register'}</Typography></Button>
            
             </Stack>
                </form>
            </Grid>
        </Grid>

        </Box>
    )
}