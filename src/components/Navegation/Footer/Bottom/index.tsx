import styles from "./styles.module.scss";
import logoEconverce from "./imgs/econverseLogo.svg";
import logoVtex from "./imgs/vtexLogo.svg";

type Props = {};

export default function FooterBottom(props: Props) {
  return (
    <div className={styles.bottom}>
      <p className={styles.copyright}>
        Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
        imagens são de propriedade de seus respectivos donos. É vedada a
        reprodução, total ou parcial, de qualquer conteúdo sem expressa
        autorização.
      </p>
      <div className={styles.logos}>
        <img src={logoEconverce} />
        <img src={logoVtex} />
      </div>
    </div>
  );
}
