import SeletorCategorias from "./SeletorCategoria";
import styles from "./styles.module.scss";

type Props = {};

export default function Produtos1(props: Props) {
    
    //Função placeholder 
    function handleCategories(name:string){
        alert(`Voce escolheu a categoria ${name}`)
    }

    const categorias = [
        "celular",
        "acessórios",
        "tablets",
        "NOTEBOOKS",
        "TVs",
        "Ver todos"
    ]

  return (
    <section className={styles.section}>
        <h1 className={styles.title}>Produtos relacionados</h1>
        <div className={styles.containerCat}>
            <SeletorCategorias handle={handleCategories} 
            categorias={categorias}/>
        </div>
        
    </section>
  );
}
