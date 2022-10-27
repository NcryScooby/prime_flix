import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/notFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
};

export default NotFound;
