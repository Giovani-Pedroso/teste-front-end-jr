import MidNav from "./Mid";
import TopNav from "./Top";
import "./styles.scss";
import BottomNav from "./Bottom";

type Props = {};

export default function Navbar(props: Props) {
  return (
    <nav>
      <TopNav />
      <MidNav />
      <BottomNav />
    </nav>
  );
}
