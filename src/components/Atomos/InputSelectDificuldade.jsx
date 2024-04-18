import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "Leve",
    label: "L"
  },
  {
    value: "Moderada",
    label: "M"
  },
  {
    value: "Pesada",
    label: "P"
  },
  {
    value: "Extra pesada",
    label: "EP"
  },
];

export default function InputSelectDificuldade({ label }) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          select
          label={label}
          defaultValue="easy"
          color="primary"
          variant="outlined"
          focused
        >
          {currencies.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
