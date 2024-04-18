import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "Santa Catarina",
    label: "SC",
  },
  {
    value: "Acre",
    label: "AC",
  },
  {
    value: "Alagoas",
    label: "AL",
  },
  {
    value: "Amapá",
    label: "AP",
  },
  {
    value: "Amazonas",
    label: "AM",
  },
  {
    value: "Bahia",
    label: "BA",
  },
  {
    value: "Ceará",
    label: "CE",
  },
  {
    value: "Espírito Santo",
    label: "ES",
  },
  {
    value: "Goiás",
    label: "GO",
  },
  {
    value: "Maranhão",
    label: "MA",
  },
  {
    value: "Mato Grosso",
    label: "MT",
  },
  {
    value: "Mato Grosso do Sul",
    label: "MS",
  },

  {
    value: "Minas Gerais",
    label: "MG",
  },
  {
    value: "Pará",
    label: "PA",
  },
  {
    value: "Pernambuco",
    label: "PE",
  },
  {
    value: "Piauí",
    label: "PI",
  },
  {
    value: "Rio de Janeiro",
    label: "RJ",
  },
  {
    value: "Rio Grande do Norte",
    label: "RN",
  },

  {
    value: "Paraná",
    label: "PR",
  },
  {
    value: "Rio Grande do Sul",
    label: "RS",
  },

  {
    value: "Rondônia",
    label: "RO",
  },
  {
    value: "Roraima",
    label: "RR",
  },
  {
    value: "São Paulo",
    label: "SP",
  },
  {
    value: "Sergipe",
    label: "SE",
  },
  {
    value: "Tocantins",
    label: "TO",
  },
  {
    value: "Distrito Federal",
    label: "DF",
  },
];

export default function InputSelectEstados({ label }) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      focused
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
