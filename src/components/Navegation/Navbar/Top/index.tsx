import shield from "./imgs/ShieldCheck.svg";
import truck from "./imgs/Truck.svg";
import card from "./imgs/CreditCard.svg";
import styles from "./styles.module.scss";
type Props = {};

export default function TopNav(props: Props) {
  return (
    <div className={styles.topNav}>
      <div className={styles.topNavSections}>
        <img
          width={20}
          height={20}
          src={shield}
          className={styles.iconTopNav}
          alt="escudo"
        />
        <div className={styles.text}>
          Compra <span className={styles.destaque}> 100% segura</span>
        </div>
      </div>
      <div className={styles.topNavSections}>
        <img
          width={20}
          height={20}
          src={truck}
          className={styles.iconTopNav}
          alt="Caminhao"
        />
        <div className={styles.text}>
          <span className={styles.destaque}>Frete gratís</span> acima de R$ 200
        </div>
      </div>
      <div className={styles.topNavSections}>
        <img
          width={20}
          height={20}
          src={card}
          className={styles.iconTopNav}
          alt="Cartao"
        />
        <div className={styles.text}>
          <span className={styles.destaque}>Parcele</span> suas compras
        </div>
      </div>
    </div>
  );
}
