import { Box } from "@mui/material";
import React from "react";
import image2 from "../../assets/image2.png"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DeleteIcon from '@mui/icons-material/Delete';

const Post=()=>{



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
          <IconButton color="primary">
            <BorderColorIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={image2}
        alt="Paella dish"
      />
      <CardContent>
        <Typography pb={3}> #mind#happieness</Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions >
        <IconButton  color="primary">
          <ThumbUpOffAltIcon />
        </IconButton>
        <IconButton color="primary"  >
          <DeleteIcon  color="primary"  sx={{marginLeft:{lg:'280px', md:'170px',sm:'170px', xs:'320px'}}}/>
        </IconButton>
        
      </CardActions>
      
    </Card>
        </Box>
    )
}


export default Post