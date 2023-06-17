import React, { useState } from "react";
import { Box ,Stack,Button, Typography, Grid} from "@mui/material";
import image from '../assets/mi3.jpg'
import TextField from '@mui/material/TextField';
import { GoogleLogin,googleLogout } from "@react-oauth/google";
import {SignUp,SignIn} from '../../actions/users'
import {useDispatch} from 'react-redux'


export default function Auth(){
    const [isSignup,setIsSignup]=useState(true)

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
    const dispatch=useDispatch()

    const handleSubmit=()=>{

    if(isSignup){
        dispatch(SignUp(userData))
    }else{
        dispatch(SignIn(userData))
    }


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
              <form >
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
             {isSignup &&
              <TextField
              label="confrimPassword"
              name="confrimPassword"
              type="password"
              onChange={onChangeHandler}
             />}
             <TextField
                 label="password"
                 type="password"
                 name="password"
                 onChange={onChangeHandler}
             />
             </Box>
             <Button variant="contained" type='submit' onChange={handleSubmit} >{isSignup ?'SignUp':'SignIN'}</Button>

             {/* <Button variant="contained">SignUp with google</Button> */}

               <GoogleLogin 
                 onSuccess={(response)=>console.log(response)}
                 onError={(error)=>console.log(error)}
                    />
                
              <Button onClick={(prev)=>setIsSignup(!prev)}><Typography>{isSignup ? 'already have account ? Login...' : 'dont have account ? register'}</Typography></Button>
            
             </Stack>
                </form>
            </Grid>
        </Grid>

        </Box>
    )
}