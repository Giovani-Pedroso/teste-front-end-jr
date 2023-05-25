import { useEffect, useState } from "react";
import Carousel from "../../UI/Carousel";
import styles from "./styles.module.scss";
import { getProducts } from "../../../utils/products";
import CardProduc from "../../UI/CardProduct";
import Modal from "../../UI/CardProduct/Modal";

type Props = {};

type PropsModal = {
  img: any;
  name: string;
  price: number;
  description: string;
};

const url =
  "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

export default function ProdutosRelacionados2(props: Props) {
  const [products, setProducts] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState({
    img: "",
    name: "",
    price: 0,
    description: "",
  });

  //Função placeholder
  function handleCategories(name: string) {
    alert(`Voce escolheu a categoria ${name}`);
  }

  const handleModal = (data: PropsModal) => {
    setDataModal(data);
    setIsModalOpen(true);
  };

  const categorias = [
    "celular",
    "acessórios",
    "tablets",
    "NOTEBOOKS",
    "TVs",
    "Ver todos",
  ];

  useEffect(() => {
    async function products() {
      const productsData = await getProducts(url);
      console.log("data", productsData);
      setProducts(
        productsData.products.map((product: any, index: 1) => {
          return <CardProduc key={index} btnFunc={handleModal} {...product} />;
        })
      );
    }
    products();
  }, []);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Produtos relacionados</h1>
      <div className={styles.verTodos}>
        <a href="#">Ver todos</a>
      </div>
      <div>
        <Carousel itemsToShow={4}>{products}</Carousel>
      </div>
      {
        //Logica para o invocar o modal
        isModalOpen && (
          <Modal
            exit={() => setIsModalOpen(false)}
            img={dataModal.img}
            name={dataModal.name}
            price={dataModal.price}
            description={dataModal.description}
          />
        )
      }
    </section>
  );
}
