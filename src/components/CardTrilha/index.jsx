import Cabecalho from '../Cabecalho'
import * as PropTypes from 'prop-types'
import './style.css'
import '../Cabecalho/style.css'


function CardTrilha({ dadosTrilha }) {
    return (
        <div>
            <>
                <Cabecalho />
                <img width={1265} height={440} src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="imagem-cabecalho" />
            </>

            <div className='card-container'>
                <h1>{dadosTrilha.nomeTrilha}</h1>
                <span> {dadosTrilha.cidade} / {dadosTrilha.estado}</span>
                <img width={200} src={dadosTrilha.urlImagem} alt="imagem trilha" />
            </div>
        </div>

    )


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
        urlImagem: PropTypes.string.isRequired
    })
}
export default CardTrilha;