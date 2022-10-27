import React, { useEffect, useState } from "react";
import styles from "../styles/favoritos.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Favoritos = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeFlix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  const excluirFilme = (id) => {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });

    setFilmes(filtroFilmes);

    localStorage.setItem("@primeFlix", JSON.stringify(filtroFilmes));

    toast.success("Filme excluído com sucesso");
  };

  return (
    <div className={styles.filmesSalvos}>
      <h1>Filmes Salvos</h1>

      {filmes.length === 0 && <span>Você não possui filmes salvos :(</span>}

      <ul>
        {filmes.map((filme) => (
          <li key={filme.id}>
            <span>{filme.title}</span>
            <div>
              <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
              <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favoritos;
