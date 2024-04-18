import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';



export default function InputText({label,sx}) {
  return (
    <Box
      component="form"
      sx={sx}
      noValidate
      autoComplete="off"
      
    >
      <TextField label={label} color="primary" variant="outlined" focused />
      
      
      
      

     
    </Box>
  );
}