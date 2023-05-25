import styles from "./styles.module.scss";
import FooterBottom from "./Bottom";
import FooterTop from "./Top";

type Props = {};

export default function Footer(props: Props) {
  return (
    <div className={styles.footer}>
      <FooterTop />
      <FooterBottom />
    </div>
  );
}
