import * as PropTypes from "prop-types";
import styles from "../CardTrilha/style.module.css";

function CardTrilha({ dadosTrilha }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.leftColunm}>
        <h3>
          {dadosTrilha.nomeTrilha} - {dadosTrilha.cidade} / {dadosTrilha.estado}
        </h3>

        <h4>Por: {dadosTrilha.nomeUsuario}</h4>

        <div className={styles.containerTrajeto}>
          <span>Duração: {dadosTrilha.duracao} Min</span>
          <p>Trajeto: {dadosTrilha.trajeto} Km</p>
          <p>Dificuldade: {dadosTrilha.dificuldade}</p>
        </div>
      </div>

      <div className={styles.img}>
        <img src={dadosTrilha.urlImagem} alt="imagem-trilha" />
      </div>
    </div>
  );
}

CardTrilha.propTypes = {
  ListaTrilhas: PropTypes.shape({
    nomeTrilha: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    duracao: PropTypes.number.isRequired,
    trajeto: PropTypes.number.isRequired,
    dificuldade: PropTypes.string.isRequired,
    tipo: PropTypes.isRequired,
    nomeUsuario: PropTypes.string.isRequired,
    urlImagem: PropTypes.string.isRequired,
  }),
};
export default CardTrilha;
