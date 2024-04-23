import { array } from "prop-types";
import { TrilhasContext } from "../../context/TrilhasContext";
import { useContext } from "react";
import CardTrilha from "../../components/CardTrilha";
import Footer from "../../components/Footer";

function ExplorarTrilhas() {
  const { cadastroTrilhas, isLoading } = useContext(TrilhasContext);

  return (
    <>
      {Array.isArray(cadastroTrilhas) && !isLoading ? (
        <div>
          {cadastroTrilhas.map((trilha, index) => (
            <CardTrilha dadosTrilha={trilha} key={index} />
          ))}
        </div>
      ) : (
        <span>Não há dados disponiveis</span>
      )}
      
      <Footer/>
      
    </>
    
  );
}
export default ExplorarTrilhas;
