import React from "react"
import axios from "axios"
const url='http://localhost:1000/user'

export const SignUp=(userData,navigate)=>async(dispatch)=>{
    try{

        const {data}= await axios.post(`${url}/signup`,userData)
        dispatch({type:'SIGNUP',payload:data})
        navigate('/')
    }catch(error){
        console.log(error)

    }

}



export const SignIn=(userData,navigate)=>async(dispatch)=>{

    try{
        const {data}=await axios.post(`${url}/signin`,userData)
        dispatch({type:'SIGNIN',payload:data})
        navigate('/')

    }catch(error){
        console.log(error)

    }

}


