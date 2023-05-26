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
            <img width={48} height={16} src={visa} alt="logo visa" />
            <img width={44} height={21} src={elo} alt="logo elo" />
            <img width={39} height={26} src={alelo} alt="logo alelo" />
          </li>
          <li>
            <img width={56} height={15} src={dinners} alt="logo dinners" />
            <img width={41} height={22} src={ifood} alt="logo ifood" />
            <img
              width={38}
              height={29}
              src={mastercard}
              alt="logo mastercard"
            />
          </li>
          <li>
            <img width={56} height={20} src={pix} alt="logo pix" />
            <img width={32} height={31} src={amex} alt="logo amex" />
            <img width={29} height={29} src={ticket} alt="logo ticket" />
          </li>
          <li>
            <img width={48} height={16} src={sodexo} alt="logo sodexo" />
          </li>
        </ul>
      </div>
    </div>
  );
}
