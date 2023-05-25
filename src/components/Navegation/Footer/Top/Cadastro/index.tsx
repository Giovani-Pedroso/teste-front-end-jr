import styles from "./styles.module.scss";
type Props = {};

export default function Cadastro(props: Props) {
  function handleSubmit(e: any) {
    e.preventDefault();
    alert("Voce Pressiono o botao");
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Cadastre-se e Receba nossas
        <br />
        <span>novidades e promoções </span>
      </h1>
      <p>
        Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem
        ipsum
      </p>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <input type="text" placeholder="SEU EMAIL" />
        <button>OK</button>
      </form>
    </div>
  );
}
