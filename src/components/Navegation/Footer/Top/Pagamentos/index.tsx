import alelo from "./imgs/alelo.svg";
import amex from "./imgs/amex.svg";
import dinners from "./imgs/dinners.svg";
import elo from "./imgs/elo.svg";
import ifood from "./imgs/ifood.svg";
import mastercard from "./imgs/mastercard.svg";
import pix from "./imgs/pix.svg";
import sodexo from "./imgs/sodexo.svg";
import ticket from "./imgs/ticket.svg";
import visa from "./imgs/visa.svg";

import styles from "./styles.module.scss";
type Props = {};

export default function Pagamentos(props: Props) {
  return (
    <div>
      <div>
        <h1 className={styles.title}>FORMAS DE PAGAMENTO</h1>
        <ul className={styles.links}>
          <li>
            <img src={visa} alt="logo visa" />
            <img src={elo} alt="logo elo" />
            <img src={alelo} alt="logo alelo" />
          </li>
          <li>
            <img src={dinners} alt="logo dinners" />
            <img src={ifood} alt="logo ifood" />
            <img src={mastercard} alt="logo mastercard" />
          </li>
          <li>
            <img src={pix} alt="logo pix" />
            <img src={amex} alt="logo amex" />
            <img src={ticket} alt="logo ticket" />
          </li>
          <li>
            <img src={sodexo} alt="logo sodexo" />
          </li>
        </ul>
      </div>
    </div>
  );
}
