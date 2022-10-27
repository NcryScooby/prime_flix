import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

import styles from "../styles/filme.module.css";
import { toast } from "react-toastify";

const Filme = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilme = async () => {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    };

    loadFilme();

    return () => {
      console.log("Componente desmontado");
    };
  }, [id, navigate]);

  const salvarFilme = () => {
    const minhaLista = localStorage.getItem("@primeFlix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );

    if (hasFilme) {
      toast.warn("Você já possui esse filme salvo");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeFlix", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso");
  };

  if (loading) {
    return (
      <div className={styles.filmeInfo}>
        <h1>Carregando seu filme...</h1>
      </div>
    );
  }

  return (
    <div className={styles.filmeInfo}>
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>
      <div className={styles.areaButtons}>
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target={"blank"}
            rel={"external"}
            href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
};

export default Filme;
