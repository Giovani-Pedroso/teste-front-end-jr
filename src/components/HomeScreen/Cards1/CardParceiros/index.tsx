import styles from "./styles.module.scss";

type Props = {
  img: any;
  altImg: string;
  title: string;
  text: string;
  buttonText: string;
  link: string;
};

export default function Card(props: Props) {
  return (
    <div className={styles.card1}>
      <img className={styles.image} alt={props.altImg} src={props.img} />
      <div className={styles.container}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.p}>{props.text}</p>
        <button className={styles.button}>
          <a className={styles.link} href="#">
            {props.buttonText}
          </a>
        </button>
      </div>
    </div>
  );
}
