import logo from "./imgs/Logo.svg";
import box from "./imgs/Packge.svg";
import heart from "./imgs/Heart.svg";
import cart from "./imgs/ShoppingCart.svg";
import user from "./imgs/UserCircle.svg";
import lupa from "./imgs/MagnifyingGlass.svg";
import styles from "./styles.module.scss";

type Props = {};

export default function MidNav(props: Props) {
  return (
    <div>
      <div className={styles.midNav}>
        <div className={styles.logoNsearch}>
          <a href="/">
            <img
              width={139}
              height={51}
              src={logo}
              className={styles.logo}
              alt="logo site"
            />
          </a>
          <div className={styles.searchBar}>
            <input
              className={styles.input}
              placeholder="O que você está buscando?"
            />
            <button className={styles.button}>
              <img src={lupa} className={styles.icon} alt="escudo" />
            </button>
          </div>
        </div>
        <div className={styles.utilities}>
          <div>
            <a href="#">
              <img
                width={26}
                height={26}
                src={box}
                className={styles.icon}
                alt="caixa"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                width={32}
                height={32}
                src={heart}
                className={styles.icon}
                alt="coracao"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                width={32}
                height={32}
                src={user}
                className={styles.icon}
                alt="usuario"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                width={32}
                height={32}
                src={cart}
                className={styles.icon}
                alt="carinho"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
