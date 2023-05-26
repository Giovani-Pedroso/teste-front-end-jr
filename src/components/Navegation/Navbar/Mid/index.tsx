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
              <img src={box} className={styles.icon} alt="escudo" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={heart} className={styles.icon} alt="escudo" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={user} className={styles.icon} alt="escudo" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={cart} className={styles.icon} alt="escudo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
