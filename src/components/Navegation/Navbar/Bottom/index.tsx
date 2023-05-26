import { useState } from "react";
import styles from "./styles.module.scss";
import crown from "./imgs/CrownSimple.svg";

type Props = {};

export default function BottomNav(props: Props) {
  const [showCategorias, setShowCategorias] = useState(true);

  function handleClick() {
    setShowCategorias((state) => !state);
  }

  return (
    <div className={styles.bottomNav}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleClick}>
          {showCategorias ? "Esconder" : "Mostar"} categorias
        </button>
      </div>
      <div
        className={`${styles.categorias} ${!showCategorias ? "" : styles.hidden
          } `}
      >
        <a href="#">Todas Categorias</a>
        <a href="#">Supermercado</a>
        <a href="#">Livros</a>
        <a href="#">Moda</a>
        <a href="#">Lançamentos</a>
        <a href="#">Ofertas do dia</a>
        <a href="#" className={styles.destaque}>
          Ofertas
        </a>
        <a href="#">
          <img src={crown} className={styles.iconTopNav} alt="coroa" />
          Assinatura
        </a>
      </div>
    </div>
  );
}
