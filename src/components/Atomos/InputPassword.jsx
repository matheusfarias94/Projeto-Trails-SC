import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function InputPassword(label) {
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
        id="outlined-password-input"
        label={label}
        type="password"
        autoComplete="current-password"
        color="secondary"
        variant="outlined"
        focused
      />
    </Box>
  );
}
export default InputPassword;
