import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Cadastro from "../pages/Cadastro.jsx";
import Lista from "../pages/Lista.jsx";
import App from "../App.jsx"


const routers = createBrowserRouter([
    {
      path: "/",   
      element: <App />,
      children: [
        {
          path: "/lista-trilhas",
          element: <Lista />,
        },
  
        {
          path: "/cadastro-trilhas",
          element: <Cadastro />,
        },
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  export default routers
