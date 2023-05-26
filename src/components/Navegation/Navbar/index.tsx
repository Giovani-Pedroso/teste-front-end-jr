import MidNav from "./Mid";
import TopNav from "./Top";
import styles from "./styles.module.scss";
import BottomNav from "./Bottom";

type Props = {};

export default function Navbar(props: Props) {
  return (
    <nav className={styles.nav}>
      <TopNav />
      <MidNav />
      <BottomNav />
    </nav>
  );
}
