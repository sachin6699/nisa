import React from "react";
import styles from "./Header.module.scss";
import img from "../../images/nisa logo_2x.jpg";

const Header = () => {
  return (
    <section className={styles.header}>
      <img src={ img } alt=""/>
    </section>
  );
};

export default Header;
