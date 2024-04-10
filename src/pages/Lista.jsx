
import CardTrilha from "../components/CardTrilha";
import useFetch from "../hooks/useFetch";


function Lista() {
    const [data, loading] = useFetch("./cards.json");
    const trilhas = data ? data.cadastroTrilhas : [];

  return (
    <div>
      {loading && <h4>Carregando trilhas...</h4>}
      {!loading && trilhas && trilhas.map(cadastroTrilhas => (
        <CardTrilha key={cadastroTrilhas.id} dadosTrilha={cadastroTrilhas} />
      ))}
    </div>
  );
}
export default Lista;
