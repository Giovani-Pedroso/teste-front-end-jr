import styles from "./styles.module.scss";

type Props = {
  logo: any;
  link: string;
  nome: string;
};

export default function CardMarca(props: Props) {
  return (
    <a className={styles.containerMarca} href={props.link}>
      <img
        className={styles.marca}
        src={props.logo}
        alt={`logo da marca ${props.nome}`}
      />
    </a>
  );
}
