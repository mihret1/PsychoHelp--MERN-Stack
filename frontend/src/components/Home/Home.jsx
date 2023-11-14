import { Box, Grid ,AppBar, TextField, Stack,Button} from "@mui/material";
import React, { useEffect ,useState} from "react";
import Posts from "../Posts/Posts";
import  Form from "../Form/Form"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPosts,getPostBySearch } from "../../actions/posts";
import Paginationn from "../Posts/pagination";
import { useNavigate, useLocation } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';

function useQuery(){
    return new URLSearchParams(useLocation().search)

}

 const Home=()=>{
    const [currentId,setCurrentId]=useState(null)
    const [search,setSearch]=useState('')

    const [tags,setTags]=useState([])
    const navigate=useNavigate()

    const dispatch=useDispatch()
    // const posts=useSelector((state)=>state.posts)
    const query=useQuery()
    const page=query.get('page') || 1
    const searchQuery=query.get('searchQuery')

     const handleAdd=(tagAdd)=>{
          setTags([...tags,tagAdd])
     }

     const handleDelete=(tagDelete)=>{
        setTags(tags.filter((tag)=>tag!== tagDelete))
     }

     const handleSearch=()=>{
        if(search.trim() || tags){
            dispatch(getPostBySearch({search,tags:tags.join(',')}))
            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
            
        }else{
            navigate('/')
        }
     }


     const handleKeyPress=(e)=>{
      if(e.keyCode === 13 ){
         handleSearch()
        }
      }
    

    return(
        <Grid container className="home"  spacing ={3} style={{marginTop:"6px"}} >

           <Grid item lg={8} md={8} sm={6} xs={12} ><Posts setCurrentId={setCurrentId}/></Grid>
           <Grid item lg={4} md={4} sm={6} xs={12}>
            <Box>
              <Box ml={3} mr={3} mb={1} spacing={1} p={2} sx={{ height:195 ,backgroundColor:'#afbab5' ,boxShadow:3 }}>
                <h3 style={{ marginBottom:10 }}>Search by tags and title</h3>

                <Stack pl={3} pr={3} spacing={1} >
                    <TextField 
                       variant="outlined"  
                       sx={{ height:40, marginBottom:2}}
                       label='search' 
                       value={search} 
                       onChange={(e)=>setSearch(e.target.value)}
                       onKeyDown={handleKeyPress} 

                       />
                       
                    <ChipInput 
                       label='tags'
                       value={tags}
                       onAdd={(tagAdd)=>handleAdd(tagAdd)}
                       onDelete={(tagDelete)=>handleDelete(tagDelete)}
                       style={{  }}
                    />
           
                       <Button  variant='contained'sx={{ backgroundColor:'black' }} 
                         onClick={handleSearch}
                          > Search
                       </Button>
                </Stack>
              </Box>  
            
               <Form   currentId={currentId}  setCurrentId={setCurrentId}/>
            </Box>
            {(!searchQuery && !tags.length)&&( <Paginationn page={page} />)} 
            </Grid>
        </Grid>
        
    )
}


export default Home