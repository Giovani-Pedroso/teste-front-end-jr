import styles from "./styles.module.scss";
import facebook from "./imgs/facebook.svg";
import instagram from "./imgs/instagram.svg";
import youtube from "./imgs/youtube.svg";

type Props = {};

export default function AboutUs(props: Props) {
  return (
    <div>
      <div>
        <h1 className={styles.title}>Sobre nós</h1>
        <ul className={styles.links}>
          <li>
            <a href="#">Conheça</a>
          </li>
          <li>
            <a href="#">COMO COMPRAR</a>
          </li>
          <li>
            <a href="#">Indicação e Desconto</a>
          </li>
        </ul>
      </div>
      <div className={styles.social}>
        <div>
          <a href="#">
            <img src={facebook} alt="facebook logo" />
          </a>
        </div>
        <a href="#">
          <img src={youtube} alt="youtube logo" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram logo" />
        </a>
      </div>
    </div>
  );
}
