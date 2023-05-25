import styles from "./styles.module.scss";
/* import { AiOutlineClose } from "react-icons/ai"; */

type Props = {
  img: any;
  name: string;
  price: number;
  description: string;
  exit: any;
};

export default function Modal(props: Props) {
  console.log("Modal rendered");
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <img src={props.img} />
        <div>
          <h1 className={styles.name}>{props.name}</h1>
          <h2 className={styles.price}>R$ {(props.price / 100).toFixed(2)}</h2>
          <p className={styles.description}>{props.description}</p>
          <a className={styles.detalhes} href="#">
            Veja mais detalhes do produto
          </a>
        </div>
        <button onClick={props.exit} className={styles.close}>
          X
        </button>
      </div>
    </div>
  );
}
