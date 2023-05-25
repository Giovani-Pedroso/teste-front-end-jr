import Sobre from "./AboutUs";
import Cadastro from "./Cadastro";
import Informacoes from "./Infos";
import Pagamentos from "./Pagamentos";
import styles from "./styles.module.scss";

type Props = {};

export default function FooterTop(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.institucional}>
        <Sobre />
        <Informacoes />
        <Pagamentos />
      </div>
      <div className={styles.cadastro}>
        <Cadastro />
      </div>
    </div>
  );
}
