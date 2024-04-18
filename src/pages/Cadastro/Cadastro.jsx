import InputText from "../../components/Atomos/InputText";
import InputNumber from "../../components/Atomos/InputNumber";
import InputSelectEstados from "../../components/Atomos/InputSelectEstados";
import InputSelectDificuldade from "../../components/Atomos/InputSelectDificuldade";
import InputSelectTipoTrilha from "../../components/Atomos/InputSelectTipoTrilha";
import styles from "../Cadastro/style.module.css";
import Abutton from "../../components/Atomos/abutton";

function Cadastro() {
  return (
    <div className={styles.container}>
      <div className={styles.containerCadastro}>
        <h1 color="white">Cadastrar nova Trilha</h1>

        <div className={styles.nomeTrilha}>
          <InputText
            sx={{
              "& > :not(style)": { m: 1, width: "80ch" },
            }}
            label="Digite o nome da trilha"
          />
        </div>

        <div className={styles.containerDuracaoTrajeto}>
          <InputNumber label="Duração (min)" />
          <InputNumber label="Trajeto (Km)" />
        </div>
        <div className={styles.containerCidadeEstado}>
          <InputText
            label="Cidade"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          />
          <InputSelectEstados label="Estado" />
        </div>
        <div className={styles.nomeDificuldade}>
          <InputText
            label="Nome completo do usuario"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          />
          <InputSelectDificuldade label="Dificuldade" />
        </div>

        <InputSelectTipoTrilha label="Tipo de trilha" />
        <InputText
          sx={{
            "& > :not(style)": { m: 1, width: "80ch" },
          }}
          label="Url imagem Da trilha"
        />
        <div className={styles.btn}>
          <div className={styles.btnCadastrar}>
            <Abutton color="success" text="Cadastrar" variant="contained" />
          </div>

          <div className={styles.btnVoltar}>
            <Abutton color="primary" text="Voltar" variant="outlined" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cadastro;
