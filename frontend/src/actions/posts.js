// import React from 'react'
// import axios from 'axios'


// const url='http://localhost:1000/posts'

// export const API=axios.create({baseURL:'http://localhost:1000'})
// API.interceptors.request.use((req)=>{
//     if(localStorage.getItem('profile')){
//         req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     }
//     return req
// })


// export const getPosts=()=>async(dispatch)=>{

//     try{
//      const  { data } = await axios.get(url)
//      dispatch({type:'FETCH_ALL',payload:data})
//     }catch(error){
//         console.log(error)
//     }

// }
 


// export const createPost=(post)=>async(dispatch)=>{

//     try{
//         const {data }= await axios.post(url,post)
//         dispatch({type:'CREATE',payload:data})

//     }catch(error){
//         console.log(error)
//     }

// }




// export const updatePost=(id,post)=>async(dispatch)=>{
//     try{

//         const {data}= await axios.patch(`${url}/${id}`,post)
//         dispatch({type:'UPDATE',payload:data})

//     }catch(error){
//         console.log(error)
//         console.log(error.message)

//     }
// }



// export const deletePost=(id)=>async(dispatch)=>{
//     try{

//         await axios.delete(`${url}/${id}`)
//         dispatch({type:'DELETE',payload:id})
//     }catch(error){
//         console.log(error)
//         console.log(error.message)

//     }
// }


// export const likePost=(id)=>async(dispatch)=>{

//     try{
//         const {data}=await axios.patch(`${url}/${id}/likePost`)
//         dispatch({type:'LIKE',payload:data})

//     }catch(error){
//         console.log(error)
//         console.log(error.message)


//     }

// }


import React from 'react'
import axios from 'axios'


const url='http://localhost:1000/posts'

export const API=axios.create({baseURL:'http://localhost:1000'})

API.interceptors.request.use((req)=>{    
    if(localStorage.getItem('profile')){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})




export const getPosts=(page)=>async(dispatch)=>{

    try{
        dispatch({type:'START_LOADING'})

        const  { data:{data,currentPage,numberOfPage} } = await API.get(`/posts?page=${page}`)
        dispatch({type:'FETCH_ALL',payload:{data,currentPage,numberOfPage}})

        dispatch({type:'END_LOADING'})

    }catch(error){
        console.log(error)
    }

}

export const getPost=(id)=>async(dispatch)=>{
    try{
        dispatch({type:'START_LOADING'})
        const {data}= await API.get(`/posts/${id}`)
        dispatch({type:'FETCH_POST',payload:{post:data}})
        dispatch({type:'END_LOADING'})
    }catch(error){
        console.log(error)
    }
}

 export const getPostBySearch=(searchQuery)=>async(dispatch)=>{
    try{
        dispatch({type:'START_LOADING'})

        const {data:{data}}=await API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
        
        dispatch({type:'FETCH_BY_SEARCH',payload:{data} })
        dispatch({type:'END_LOADING'})

    }catch(error){
        console.log(error.message)

    }

 }



export const createPost=(post)=>async(dispatch)=>{

    try{
        dispatch({type:'START_LOADING'})
        
        const {data }= await API.post('/posts',post)
        dispatch({type:'CREATE',payload:data})

        dispatch({type:'END_LOADING'})

    }catch(error){
        console.log(error)
    }

}




export const updatePost=(id,post)=>async(dispatch)=>{
    try{

        const {data}= await API.patch(`posts/${id}`,post)
        dispatch({type:'UPDATE',payload:data})

    }catch(error){
        console.log(error)
        console.log(error.message)

    }
}



export const deletePost=(id)=>async(dispatch)=>{
    try{

        await API.delete(`posts/${id}`)
        dispatch({type:'DELETE',payload:id})
    }catch(error){
        console.log(error)
        console.log(error.message)

    }
}


export const likePost=(id)=>async(dispatch)=>{

    try{
        const {data}=await API.patch(`posts/${id}/likePost`)
        dispatch({type:'LIKE',payload:data})

    }catch(error){
        console.log(error)
        console.log(error.message)


    }

}





