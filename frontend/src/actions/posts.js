import React from 'react'
import axios from 'axios'


const url='http://localhost:1000/posts'


export const getPosts=()=>async(dispatch)=>{

    try{
     const  { data } = await axios.get(url)
     dispatch({type:'FETCH_ALL',payload:data})
    }catch(error){
        console.log(error)
    }

}
 


export const createPost=(post)=>async(dispatch)=>{

    try{
        const {data }= await axios.post(url,post)
        dispatch({type:'CREATE',payload:data})

    }catch(error){
        console.log(error)
    }

}




export const updatePost=(id,post)=>async(dispatch)=>{
    try{

        const {data}=axios.patch(`${url}/${id}`,post)
        dispatch({type:'UPDATE',payload:data})

    }catch(error){
        console.log(error)
    }
}



export const deletePost=(id)=>async(dispatch)=>{
    try{

        const {data}=await axios.delete(`${url}/${id}`)
        dispatch({type:'DELETE',payload:id})
    }catch(error){
        console.log(error)
        console.log(error.message)

    }
}