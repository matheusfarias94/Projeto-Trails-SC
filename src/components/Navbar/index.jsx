import { Link } from "react-router-dom";
import styles from "../Navbar/style.module.css"


function Navbar() {
  return (
    <div className={styles.container}>
      <Link to="/" id={styles.titulo}>Trails SC</Link>
      <div>
        <Link to="/explorar-trilhas" >Explorar Trilhas</Link>
        <Link to="/cadastro-trilhas">Cadastrar Trilhas</Link>
      </div>
    </div>
  );
}
export default Navbar;
