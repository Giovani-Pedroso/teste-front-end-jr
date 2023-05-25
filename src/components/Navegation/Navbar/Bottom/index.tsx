import "./styles.scss"
import crown from "./imgs/CrownSimple.svg"

type Props = {};

export default function BottomNav(props: Props) {
  return( 
    <div className="bottomNav">
      <a href="#">Todas Categorias</a>
      <a href="#">Supermercado</a>
      <a href="#">Livros</a>
      <a href="#">Moda</a>
      <a href="#">Lançamentos</a>
      <a href="#">Ofertas do dia</a>
      <a href="#" className="destaque">Ofertas</a>
      <a href="#"> 
      <img src={crown} className="iconTopNav" alt="coroa" />
      Assinatura</a>
    </div>)
}
