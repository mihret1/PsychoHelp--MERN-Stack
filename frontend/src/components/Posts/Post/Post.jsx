import { Box, Stack } from "@mui/material";
import React,{useState} from "react";
import image2 from "../../assets/image1.png"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment'
import { deletePost, updatePost } from "../../../actions/posts";
import { useDispatch } from "react-redux";
import { Button } from '@mui/material'


const Post=({post,setCurrentId})=>{
const dispatch=useDispatch()

    return(
  <Box sx={{ boxShadow: 4 }} > 
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            M
          </Avatar>
        }

        action={
          <Button color="primary" onClick={()=>setCurrentId(post._id)}>
            <BorderColorIcon />
          </Button>
        }

        title={post.creator}
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardMedia
        component="img"
        height="194"
        // image={image2}

        image={post.selectedFile}
        alt="photo of post"
      />
      <CardContent pl={2}>
        <Typography pb={3}>{post.title}</Typography>
        <Typography variant="body2" color="text.secondary">
         {post.message}
        </Typography>
        <Typography  pt={1}> {post.tags.map((tag)=>`#${tag}`)}</Typography>
      </CardContent>
      <CardActions >
        <Stack direction='row'  >
        <IconButton  color="primary">
          <ThumbUpOffAltIcon />
        </IconButton>
        <IconButton 
          onClick={()=>dispatch(deletePost(post._id))}
           color="primary" 
           sx={{marginLeft:{lg:'280px', md:'170px',sm:'190px', xs:'320px'}}} >
          <DeleteIcon  color="primary"  />
        </IconButton>
        </Stack>
      </CardActions>
      
    </Card>
        </Box>
    )
}


export default Post