/**
 * PASSOS PARA CRIAR UM CONTEXTO
 *
 * 1 - [x] - IMPORTE O createContext DO REACT
 * 2 - [x] - CRIAR A VARIÁVEL DO CONTEXTO
 * 3 - [x] - EXPORTAR A VARIÁVEL DO CONTEXTO
 *
 * 4 - [x] - CRIE E EXPORTE A VARIÁVEL DO PROVIDER
 * 5 - [x] - RECEBA A PROP CHILDREN
 * 6 - [x] - DEFINA OS DADOS GLOBAIS
 * 7 - [x] - CRIE O JSX DO PROVIDER E PASSE OS DADOS GLOBAIS NA PROP value
 * 8 - [x] - IMPORTE O PROVIDER NO ARQUIVO APP.JSX
 *
 * 9 - [x] - IMPORTE O CONTEXTO NO ARQUIVO QUE FOR UTILIZAR
 * 10 - [x] - IMPORTE O useContext DO REACT
 * 11 - [x] - RECEBA OS DADOS GLOBAIS USANDO O useContext
 */

import { createContext,useState,useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const TrilhasContext = createContext();
 
//PROVIDER
export const TrilhasContextProvider = ({ children }) => {
  //DADOS GLOBAISs
  const [dados, isLoading] = useFetch("./cards.json");
  const [cadastroTrilhas,setCadastroTrilhas] = useState([]);

  
 useEffect(() => {
  if (!!dados && !isLoading) {
    setCadastroTrilhas(dados.cadastroTrilhas);
  }
 }, [dados]);

  function addTrail(trailData) {
    setCadastroTrilhas((t) => [...t, trailData]);
  }

  return (
    <TrilhasContext.Provider value={{ cadastroTrilhas, setCadastroTrilhas, isLoading, addTrail }}>
      {children}
    </TrilhasContext.Provider>
  );
};
