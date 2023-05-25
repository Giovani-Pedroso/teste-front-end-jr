import styles from "./styles.module.scss";
type Props = {};

export default function Informacoes(props: Props) {
  return (
    <div>
      <div>
        <h1 className={styles.title}>INFORMAÇÕES ÚTEIS</h1>
        <ul className={styles.links}>
          <li>
            <a href="#">FALE CONOSCO</a>
          </li>
          <li>
            <a href="#">DÚVIDAS</a>
          </li>
          <li>
            <a href="#">Prazos de Entrega</a>
          </li>
          <li>
            <a href="#">Formas de Pagamento</a>
          </li>
          <li>
            <a href="#">Política de privacidade</a>
          </li>
          <li>
            <a href="#">Trocas e Devoluções</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
