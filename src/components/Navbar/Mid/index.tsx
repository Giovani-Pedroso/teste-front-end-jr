import logo from "./Logo.svg";
import box from "./Packge.svg";
import heart from "./Heart.svg";
import cart from "./ShoppingCart.svg";
import user from "./UserCircle.svg";
import lupa from "./MagnifyingGlass.svg";
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
            <img src={lupa} className="iconTopNav" alt="escudo" />
          </button>
        </div>
        {/*
         */}
        <div className="utilities">
          <div>
            <a href="#">
              <img src={box} className="iconTopNav" alt="escudo" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={heart} className="iconTopNav" alt="escudo" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={user} className="iconTopNav" alt="escudo" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={cart} className="iconTopNav" alt="escudo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
