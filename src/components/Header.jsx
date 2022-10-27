import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className={styles.logo}>
        Prime Flix
      </Link>
      <Link to="/favoritos" className={styles.favoritos}>
        Meus Filmes
      </Link>
    </header>
  );
};

export default Header;
