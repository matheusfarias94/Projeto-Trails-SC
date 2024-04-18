import * as React from "react";
import Button from "@mui/material/Button";



function Abutton({ text, color,variant,href }) {
  return (
  
      <Button href={href} variant={variant} color={color}>{text}</Button>
    
  );
}
export default Abutton;
