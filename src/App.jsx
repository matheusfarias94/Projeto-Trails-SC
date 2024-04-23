import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { TrilhasContextProvider } from "./context/TrilhasContext";



function App() {
  return (
    <TrilhasContextProvider>
      <Navbar />
      <Outlet />
      

      
    </TrilhasContextProvider>
  );
}
export default App;
