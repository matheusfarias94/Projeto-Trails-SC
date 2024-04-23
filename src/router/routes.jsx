import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Cadastro from "../pages/Cadastro/Cadastro.jsx";
import ExplorarTrilhas from "../pages/ExplorarTrilhas/ExplorarTrilhas.jsx";
import App from "../App.jsx"


const routers = createBrowserRouter([
    {
      path: "/",   
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/explorar-trilhas",
          element: <ExplorarTrilhas />,
        },
  
        {
          path: "/cadastro-trilhas",
          element: <Cadastro />,
        },
        
      ],
    },
  ]);
  export default routers
