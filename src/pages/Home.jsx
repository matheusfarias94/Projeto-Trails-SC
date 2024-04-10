import { UsuariosContext } from "../context/UsuariosContext";
import { useContext } from "react";

function Home() {

    const {usuarios} = useContext(UsuariosContext)
  return (
    <div>
      <img
        width={1265}
        height={440}
        src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="imagem-cabecalho"
        
      />
      {usuarios[0].nomeTrilha}
    </div>
     
  );
}
export default Home;
