import styles from "./styles.module.scss";
import logoMarcas from "./imgs/Marca.svg";
import CardMarca from "./CardMarcas";

type Props = {};

export default function Marcas(props: Props) {
  const marcas = [
    {
      link: "#",
      nome: "1",
      logo: logoMarcas,
    },
    {
      link: "#",
      nome: "2",
      logo: logoMarcas,
    },
    {
      link: "#",
      nome: "3",
      logo: logoMarcas,
    },
    {
      link: "#",
      nome: "4",
      logo: logoMarcas,
    },
    {
      link: "#",
      nome: "5",
      logo: logoMarcas,
    },
  ];
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Navegue por marcas</h1>
      <div className={styles.containerMarcar}>
        {marcas.map((marca) => {
          return <CardMarca {...marca} key={marca.nome} />;
        })}
      </div>
    </section>
  );
}
