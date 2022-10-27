import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

import styles from "../styles/home.module.css";

const Home = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilmes = async () => {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: process.env.REACT_APP_TMDB_API_KEY,
          language: "pt-BR",
          page: 1,
        },
      });
      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);
    };
    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.listaFilmes}>
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
