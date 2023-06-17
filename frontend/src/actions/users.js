import React from "react"
import axios from "axios"
const url='http://localhost:1000/user'

export const SignUp=(userData)=>async(dispatch)=>{
    try{
        const {data}=axios.post(`${url}/signup`,userData)
        dispatch({type:'SIGNUP',payload:data})
    }catch(error){
        console.log(error)

    }

}



export const SignIn=(userData)=>async(dispatch)=>{

    try{
        const {data}=axios.post(`${url}/signin`,userData)
        dispatch({type:'SIGNIN',payload:data})
    }catch(error){
        console.log(error)

    }

}


