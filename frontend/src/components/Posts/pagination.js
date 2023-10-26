
import { Box, PaginationItem } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import { useSelector } from 'react-redux';

const Paginationn=({page})=>{

    const  {numberOfPage}=useSelector((state)=>state.posts)
    const  {posts}=useSelector((state)=>state.posts)
    const dispatch=useDispatch()

     useEffect(()=>{
        if(page){
            dispatch(getPosts(page))
        }
    },[dispatch,page])

    return(
        <Box >
         <Pagination
           count={numberOfPage}
           page={Number(page) || 1}
           renderItem={(item)=>( <PaginationItem {...item} component={Link}  to={`/posts?page=${item.page}`}/>)}
           size="large"
           variant="outlined"
           color="primary"
           />

        </Box>
    )
}

export default Paginationn