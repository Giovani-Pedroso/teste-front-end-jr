import logo from "./imgs/Logo.svg";
import box from "./imgs/Packge.svg";
import heart from "./imgs/Heart.svg";
import cart from "./imgs/ShoppingCart.svg";
import user from "./imgs/UserCircle.svg";
import lupa from "./imgs/MagnifyingGlass.svg";
import "./styles.scss";

type Props = {};

export default function MidNav(props: Props) {
  return (
    <div className="">
      <div className="midNav">
        {/*Logo*/}
        <div>
          <a href="/">
            <img width="178" src={logo} />
          </a>
        </div>
        {/*Search bar*/}
        <div className="searchBar">
          <input className="input" placeholder="O que você está buscando?" />
          <button className="button">
            <img src={lupa} className="icon" alt="escudo" />
          </button>
        </div>
        {/*
         */}
        <div className="utilities">
          <div>
            <a href="#">
              <img src={box} className="icon" alt="escudo" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={heart} className="icon" alt="escudo" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={user} className="icon" alt="escudo" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={cart} className="icon" alt="escudo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
