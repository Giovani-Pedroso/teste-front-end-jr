import Card from "./CardParceiros";
import Loja from "./imgs/Store.webp";
import styles from "./styles.module.scss";

type Props = {};

export default function Cards(props: Props) {
  return (
    <section className={styles.section}>
      <Card
        title="Parceiros"
        text="Lorem ipsum dolor sit amet,consectetur"
        img={Loja}
        altImg="Loja"
        buttonText="Confira"
        link="#"
      />
      <Card
        title="Parceiros"
        text="Lorem ipsum dolor sit amet,consectetur"
        img={Loja}
        altImg="Loja"
        buttonText="Confira"
        link="#"
      />
    </section>
  );
}
