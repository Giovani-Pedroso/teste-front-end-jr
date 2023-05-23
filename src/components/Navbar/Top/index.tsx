import shield from "./imgs/ShieldCheck.svg";
import truck from "./imgs/Truck.svg";
import card from "./imgs/CreditCard.svg";
import "./styles.scss";
type Props = {};

export default function TopNav(props: Props) {
  return (
    <div className="topNav">
      <div className="topNavSections">
        <img src={shield} className="iconTopNav" alt="escudo" />
        <div>
          Compra <span className="destaque"> 100% segura</span>
        </div>
      </div>
      <div className="topNavSections">
        <img src={truck} className="iconTopNav" alt="Caminhao" />
        <div>
          <span className="destaque">Frete gratís</span> acima de R$ 200
        </div>
      </div>
      <div className="topNavSections">
        <img src={card} className="iconTopNav" alt="Cartao" />
        <div>
          <span className="destaque">Parcele</span> suas compras
        </div>
      </div>
    </div>
  );
}
