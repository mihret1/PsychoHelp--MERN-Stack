import { Box, Paper, Stack, TextField, Typography ,Button} from "@mui/material";
import React from "react";
import FileBase from 'react-file-base64';

 const Form=()=>{
        const handleSubmit=()=>{

        }


    return(
        <Box p={3}>
            <Paper>
              <form onSubmit={handleSubmit}>
              <Box pl={10} mb={1} style={{backgroundColor:'black',height:"80px" }}>  
                   <Typography pt={3}variant="h5" style={{color:'white'}}> Create Your Post</Typography>
                </Box>
                <Stack spacing={2}>

               

                <TextField
                    
                    label="Title"
                    
                   /> 
                   <TextField
                    
                    label="Message"
                    
                   /> 
                   <TextField
                    
                    label="Tags"
                    
                   />
                   
                   <FileBase 
                         type="file"
                         multiple={false}
                         onDone={({base64}) => {}}

                    />
                    <Button variant="contained" > submit</Button>

                    <Button variant="contained" color="error"> clear</Button>

                   </Stack>  
                </form>
            </Paper>
        </Box>
    )
}


export default Form