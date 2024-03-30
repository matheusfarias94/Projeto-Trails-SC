import * as PropTypes from 'prop-types'
import './style.css'
function CardTrilha({ dadosTrilha }) {
    return (

        <div className='card-container'>
            <h1>{dadosTrilha.nomeTrilha}</h1>
            <span> {dadosTrilha.cidade} / {dadosTrilha.estado}</span>
            <img width={200} src={dadosTrilha.urlImagem} halt="imagem trilha" />
        </div>
    )

}

CardTrilha.PropTypes = {
    ListaTrilhas: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        duracao: PropTypes.number.isRequired,
        trajeto: PropTypes.number.isRequired,
        dificuldade: PropTypes.string.isRequired,
        tipo: PropTypes.isRequired,
        nomeUsuario: PropTypes.string.isRequired,
        urlImagem: PropTypes.string.isRequired
    })
}
export default CardTrilha;