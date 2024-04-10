import Navbar from "./components/Navbar";
import{Outlet} from "react-router-dom"
import { UsuariosContextProvider } from "./context/UsuariosContext";



function App() {
    return(
        <UsuariosContextProvider>
        
        <Navbar/>
        <Outlet/>
        
        </UsuariosContextProvider>
        
    )
    
}
export default App;