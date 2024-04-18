import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function InputNumber({ label }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      
    >
      <TextField
        label={label}
        type="number"
        // step={0.01}
        InputLabelProps={{
          shrink: true,
        }}
        color="primary"
        variant="outlined"
        focused
      />
    </Box>
  );
}
