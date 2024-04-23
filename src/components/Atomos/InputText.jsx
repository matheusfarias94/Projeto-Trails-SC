import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';



export default function InputText({label,sx}) {

  
  return (
    <Box
      component="form"
      sx={sx}
      noValidate
      autoComplete="off"
      
    >
      <inputComponent>
      <TextField label={label} color="primary" variant="outlined" focused />
      </inputComponent>
      
      
      

     
    </Box>
  );
}