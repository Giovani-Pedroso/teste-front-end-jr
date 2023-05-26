import styles from "./styles.module.scss";

type Props = {
  name: string;
  link: string;
  img: any;
};

export default function CardMercadorias(props: Props) {
  return (
    <div>
      <a className={styles.cardContainer} href={props.link}>
        <div className={styles.containerImg}>
          <img
            width={61}
            height={61}
            src={props.img}
            alt={`logo para a categoria ${props.name}`}
          />
        </div>
        <p>{props.name}</p>
      </a>
    </div>
  );
}
