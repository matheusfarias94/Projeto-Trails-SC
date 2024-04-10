import { Link } from "react-router-dom";


function Navbar() {


    return (
        <div className="container-cabecalho">
            
            <h2>Trails SC</h2>
            <div>
                <Link to='/lista-trilhas'>Explorar Trilhas</Link>
                <Link to='/cadastro-trilhas'>Cadastrar Trilhas</Link>

            </div>

        </div>
    )


}
export default Navbar;