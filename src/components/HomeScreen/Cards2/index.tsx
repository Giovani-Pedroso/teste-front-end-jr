import Card from "./CardStore2";
import Loja from "./imgs/Store2.webp";
import styles from "./styles.module.scss";

type Props = {};

export default function ProdutosHomeCards(props: Props) {
  return (
    <section className={styles.section}>
      <Card
        title="Produtos"
        text="Lorem ipsum dolor sit amet,consectetur"
        img={Loja}
        altImg="Loja"
        buttonText="Confira"
        link="#"
      />
      <Card
        title="Produtos"
        text="Lorem ipsum dolor sit amet,consectetur"
        img={Loja}
        altImg="Loja"
        buttonText="Confira"
        link="#"
      />
    </section>
  );
}
