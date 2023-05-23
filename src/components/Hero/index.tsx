import "./styles.scss";

type Props = {};

export default function Hero(props: Props) {
  return (
    <main>
         <div className="hero">
      <div className="container">
        <p className="title">
        Venha conhecer nossas <br/>
         promoções
        </p>
        <p className="subtitle">
        50% Off nos produtos 
        </p>
        <button className="button">
          <a className="buttonHero" href="#">
          Ver produto
          </a>
        </button>
      </div>
    </div>
    </main>
  );
}
