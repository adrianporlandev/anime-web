import axios from 'axios';

// src/lib/api.js

const JIKAN_BASE_URL = 'https://api.jikan.moe/v4';

const fetchTopAnimes  = async () => {
  try {
    const response = await axios.get(`${JIKAN_BASE_URL}/top/anime`);
    return response.data.data.slice(0,14); // Devuelve los primeros 10 animes
  } catch (error) {
    console.error('Error al obtener los datos de Jikan:', error);
    return [];
  }
};

const fetchSeasonAnimes  = async () => {
  try {
    const response = await axios.get(`${JIKAN_BASE_URL}/seasons/now`);
    return response.data.data.slice(0,14); // Devuelve los primeros 10 animes
  } catch (error) {
    console.error('Error al obtener los datos de Jikan:', error);
    return [];
  }
};

async function fetchAnimeById(id) {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
  if (!response.ok) {
    throw new Error('Error al obtener los detalles del anime');
  }
  const data = await response.json();
  return data.data;
}

export { fetchTopAnimes as a, fetchSeasonAnimes as b, fetchAnimeById as f };
