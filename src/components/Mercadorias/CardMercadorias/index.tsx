import styles from "./styles.module.scss"

type Props = { 
    name: string;
    link:string;
    img:any
};

export default function CardMercadorias(props: Props) {
  return( 

    <div >
        <a className={styles.cardContainer} href={props.link}>
        <div className={styles.containerImg}>
            <img src={props.img}/>
        </div> 
        <p>{props.name}</p>
        </a>
    </div>)
}