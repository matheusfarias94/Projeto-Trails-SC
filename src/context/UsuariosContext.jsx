/** 
 * PASSO A PASSO PARA CRIAR UM CONTEXTO
 * 
 * 1 - [x] - CRIE O ARQUIVO DO CONTEXTO NA PASTA CONTEXT
 * 2 - [x] - IMPORTAR O createContext DO REACT
 * 3 - [x] - CRIAR O CONTEXTO USANDO A FUNÇÃO createContext
 * 4 - [x] - EXPORTAR A VARIAVEL DO CONTEXTO
 * 5 - [x] - CRIE O PROVIDER
 * 6 - [x] - DEFINA OS DADOS GLOBAIS
 * 7 - [x] - CRIE O RETURN DO PROVIDER PASSANDO OS DADOS GLOBAIS DENTRO DA PROPS'VALUE
 * 8 - [x] - EXPORTE O PROVIDER
*/ 

import { createContext, useState } from "react";




export const UsuariosContext = createContext()

export const UsuariosContextProvider = ({children}) => {
    //DADOS GLOBAIS
    const [usuarios, setUsuarios] = useState([

        {nomeTrilha: "Trilha da Lagoinha do Leste",
        cidade: "Florianopolis",
        estado: "SC",
         //aqui vai as listas das trilhas
        }
        
    ])


    return(
        <UsuariosContext.Provider value={usuarios,setUsuarios}>
            {children}

        </UsuariosContext.Provider>
        
    )
}
 