import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "Trilha(ida e volta pelo mesmo caminho)",
    label: "trilha",
  },
  {
    value: "Travessia(inicio e fim são lugares distintos)",
    label: "travessia",
  },
  {
    value:
      "Circuito(começa e termina no mesmo local,mas seguindo por caminhos diferentes",
    label: "circuito",
  },
];

export default function InputSelectTipoTrilha({ label }) {
  return (
    <Box
    component="form"
    sx={{
      "& .MuiTextField-root": { m: 1, width: "80ch" },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        select
        label={label}
        defaultValue=""
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
