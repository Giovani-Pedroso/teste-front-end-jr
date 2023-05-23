import styles from "./styles.module.scss";

type Props = {
    handle:any
    categorias: string[]
};

export default function SeletorCategorias(props: Props) {



  return (
    <div className={styles.containerButton}>
        {
            props.categorias.map(cat=>{
                return(
                    <button key={cat} 
                    className={styles.button}
                    onClick={()=>props.handle(cat)}>
                        {cat}
                    </button>
                )
            })
        }
    </div>
  );
}