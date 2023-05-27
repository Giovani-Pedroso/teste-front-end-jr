import { useState } from "react";
import Modal from "./Modal";
import styles from "./styles.module.scss";

type Props = {
  productName: string;
  descriptionShort: string;
  photo: string;
  btnFunc: any;
  price: number;
};

export default function CardProduc(props: Props) {
  return (
    <div className={styles.containerCard}>
      <img
        className={styles.img}
        src={props.photo}
        alt={`imagem do produto ${props.productName}`}
      />
      <p className={styles.name}>{props.productName}</p>
      <p className={styles.description}>{props.descriptionShort}</p>
      <p className={styles.price}>
        R$ <span>{(props.price / 100).toFixed(2)}</span>
      </p>
      <button
        onClick={() => {
          props.btnFunc({
            name: props.productName,
            price: props.price,
            description: props.descriptionShort,
            img: props.photo,
          });
        }}
        className={styles.button}
      >
        Comprar
      </button>
    </div>
  );
}
