import Abutton from "../../components/Atomos/abutton"
import styles from "../../pages/Home/styles.module.css";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.titulo1}>
        <h1>Que tal aproveitar um tempo com a natureza?</h1>
        <p>
          Junte-se a comunidade de entusiastas ao ar livre, compartilhe suas
          <br />
          aventuras e inspire-se com as experiencias de outros aventureiros.
          <br />
          Prepare-se para explorar novos horizontes e se conectar com a natureza
          <br />
          atraves do Trails-SC
        </p>
      </div>
      <div className={styles.btnTitulo1}>
        <Abutton
          href="/explorar-trilhas"
          color="success"
          text="Explorar trilhas"
          variant="contained"
        />
      </div>
      <div className={styles.titulo2}>
        <h2>Explore trilhas incríveis</h2>
        <p>
          O "Trails-SC" é seu portal para explorar e compartilhar as melhores
          trilhas para trekking e ciclismo ao redor do mundo. <br />
          Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas
          exuberantes até trilhas desafiadoras em montanhas <br />
          majestosas.Encontre informações detalhadas sobre cada trilha,
          incluindo distância,dificuldade, pontos de interesse naturais e <br />
          dicas úteis para uma experiência eco-friendly.
        </p>
      </div>
      <div className={styles.btnTitulo2}>
        <Abutton
          href="/explorar-trilhas"
          color="success"
          text="Explorar trilhas"
          variant="contained"
        />
      </div>
      <div className={styles.containerTitulo3}>
        <div className={styles.titulo3}>
          <h2>
            Compartilhe fotos,
            <br />
            dicas e localização das <br />
            suas trilhas favoritas
          </h2>

          <Abutton
            href="/cadastro-trilhas"
            color="success"
            text="Cadastrar nova trilha"
            variant="contained"
          />
        </div>

        <div className={styles.imgTitulo3}>
          <img
            src="https://images.pexels.com/photos/1194233/pexels-photo-1194233.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          
        </div>
        
      </div>
      <Footer/>
      

    </div>
  );
}
export default Home;
