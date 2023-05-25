import styles from "./styles.module.scss";

type Props = {};

export default function Hero(props: Props) {
  return (
    <main>
      <div className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.title}>
            Venha conhecer nossas <br />
            promoções
          </p>
          <p className={styles.subtitle}>50% Off nos produtos</p>
          <a className={styles.button} href="#">
            Ver produtos
          </a>
        </div>
      </div>
    </main>
  );
}
