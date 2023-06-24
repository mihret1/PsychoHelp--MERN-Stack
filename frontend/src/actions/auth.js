// import React from "react"
// import axios from "axios"
// import { API } from "./posts"

// const url='http://localhost:1000/user'

// // const API=axios.create({baseURL:'http://localhost:1000'})



// // API.interceptors.request.use((req)=>{
// //     if(localStorage.getItem('profile')){
// //         req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
// //     }

// //     return req
// // })




// export const SignUp=(userData,navigate)=>async(dispatch)=>{
//     try{

//         const {data}= await axios.post(`${url}/signup`,userData)
//         dispatch({type:'AUTH',data})
//         navigate('/')
//     }catch(error){
//         console.log(error)

//     }

// }



// export const SignIn=(userData,navigate)=>async(dispatch)=>{

//     try{
//         const {data}=await axios.post(`${url}/signin`,userData)
//         dispatch({type:'AUTH',data})
//         navigate('/')

//     }catch(error){
//         console.log(error)

//     }

// }

import React from "react"
import axios from "axios"
import { API } from "./posts"

const url='http://localhost:1000/user'

// API.interceptors.request.use((req)=>{
//     if(localStorage.getItem('profile')){
//         req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     }

//     return req
// })




export const SignUp=(userData,navigate)=>async(dispatch)=>{
    try{

        const {data}= await API.post('user/signup',userData)
        dispatch({type:'AUTH',data})
        navigate('/')
    }catch(error){
        console.log(error)

    }

}



export const SignIn=(userData,navigate)=>async(dispatch)=>{

    try{
        const {data}=await API.post('user/signin',userData)
        dispatch({type:'AUTH',data})
        navigate('/')

    }catch(error){
        console.log(error)

    }

}




