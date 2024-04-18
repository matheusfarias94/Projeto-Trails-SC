import { TrilhasContext, TrilhasContextProvider } from "../../context/TrilhasContext";
import { useContext } from "react";

function ExplorarTrilhas() {
  const trilhas = useContext(TrilhasContext)
   
  return (
  
    <TrilhasContextProvider/>
    
  );
}
export default ExplorarTrilhas;
