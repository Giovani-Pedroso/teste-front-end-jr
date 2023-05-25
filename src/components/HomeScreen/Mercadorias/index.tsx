import tech from "./imgs/tecnologia.webp";
import corrida from "./imgs/corrida.webp";
import feramentas from "./imgs/ferramentas.webp";
import moda from "./imgs/moda.webp";
import saude from "./imgs/saude.webp";
import mercado from "./imgs/supermercados.webp";
import whiskey from "./imgs/whiskey.webp";

import styles from "./styles.module.scss";
import CardMercadorias from "./CardMercadorias";

type Props = {};

export default function Mercadorias(props: Props) {
  const categories = [
    {
      name: "Tecnologia",
      img: tech,
      link: "#",
    },
    {
      link: "#",
      name: "Supermercado",
      img: mercado,
    },
    {
      link: "#",
      name: "Bebidas",
      img: whiskey,
    },
    {
      name: "Ferramentas",
      link: "#",
      img: feramentas,
    },
    {
      name: "Saúde",
      link: "#",
      img: saude,
    },
    {
      name: "Esportes e Fitness",
      link: "#",
      img: corrida,
    },
    {
      name: "Moda",
      link: "#",
      img: moda,
    },
  ];

  return (
    <section className={styles.mercadorias}>
      {categories.map((category) => {
        return <CardMercadorias key={category.name} {...category} />;
      })}
    </section>
  );
}
