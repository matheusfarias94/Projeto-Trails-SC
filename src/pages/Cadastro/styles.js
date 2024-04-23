import { styled } from "@mui/system";

export const PageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundImage:
    "url(https://images.pexels.com/photos/4476806/pexels-photo-4476806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
  backgroundSize: "90em",
  backgroundPosition: "center",
  position: "relative",
  zIndex: " 1",
  backgroundRepeat: "no-repeat",
  fontFamily: "Roboto, sans-serif",
  
});

export const PageTitle = styled("h1")({
  marginBottom: "2rem",
  color: "white",
});

export const FormComponent = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  minWidth: "50vw",
  minHeight:"100vh",
});

export const InputWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",

  "& > label": {
    paddingBottom: "0.5rem",
    fontSize: "1rem",
    color: "white",
  },

  "& > input, & > select": {
    padding: "0.5rem",
    backgroundColor: "#D8E3D2",
    border: "1px solid #AEB3B7",
    borderRadius: "0.25rem",
    color: "#252525",
    fontSize: "1rem",
  },
});

export const DoubleInput = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
});

export const ButtonsWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  
});
