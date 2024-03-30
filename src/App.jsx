import CardTrilha from "./components/CardTrilha"
import './App.css'
function App() {
  const ListaTrilhas = [{
    nomeTrilha: 'Trilha da Lagoinha do Leste',
    cidade: 'Florianopolis',
    estado: 'SC',
    duracao: 180,
    trajeto: 2,
    dificuldade: 'iniciante',
    tipo: 'caminhada / trekking',
    nomeUsuario: 'Matheus',
    urlImagem: 'https://images.pexels.com/photos/10158978/pexels-photo-10158978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

  }
  ]

  return (
    <div className="container">
      {
        ListaTrilhas.map((ListaTrilhas, index) => (
          <CardTrilha dadosTrilha={ListaTrilhas} key={index} />
        ))

      }
    </div>
  )
}

export default App
