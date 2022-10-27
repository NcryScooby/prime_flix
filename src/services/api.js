// Base da URL: https://api.themoviedb.org/3
// URL DA API: /movie/now_playing?api_key=17e22726173ad18e73404feb4ca6c964&language=pt-BR

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
