// src/lib/api.js
import axios from 'axios';

const JIKAN_BASE_URL = 'https://api.jikan.moe/v4';

export const fetchTopAnimes  = async () => {
  try {
    const response = await axios.get(`${JIKAN_BASE_URL}/top/anime`);
    return response.data.data.slice(0,14); // Devuelve los primeros 10 animes
  } catch (error) {
    console.error('Error al obtener los datos de Jikan:', error);
    return [];
  }
};

export const fetchSeasonAnimes  = async () => {
  try {
    const response = await axios.get(`${JIKAN_BASE_URL}/seasons/now`);
    return response.data.data.slice(0,14); // Devuelve los primeros 10 animes
  } catch (error) {
    console.error('Error al obtener los datos de Jikan:', error);
    return [];
  }
};

export async function fetchAnimeById(id) {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
  if (!response.ok) {
    throw new Error('Error al obtener los detalles del anime');
  }
  const data = await response.json();
  return data.data;
}

export async function fetchAllAnimes() {
  const response = await fetch('https://api.jikan.moe/v4/anime'); // Ajusta el endpoint según tu necesidad
  if (!response.ok) {
    throw new Error('Error al obtener la lista de animes');
  }
  const data = await response.json();
  return data.data; // Asegúrate de que esta estructura coincida con la respuesta de tu API

}

export async function fetchAnimeByName(query) {
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
  if (!response.ok) {
    throw new Error('Error al buscar animes');
  }
  const data = await response.json();
  return data.data;
}

export async function fetchAnimeCharacters() {
  const response = await fetch('https://api.jikan.moe/v4/anime/${id}/characters'); // Ajusta el endpoint según tu necesidad
  if (!response.ok) {
    throw new Error('Error al obtener la lista de animes');
  }
  const data = await response.json();
  return data.data; // Asegúrate de que esta estructura coincida con la respuesta de tu API
}

export async function fetchAnimeRelations() {
  const response = await fetch('https://api.jikan.moe/v4/anime/${id}/relations'); // Ajusta el endpoint según tu necesidad
  if (!response.ok) {
    throw new Error('Error al obtener la lista de animes');
  }
  const data = await response.json();
  return data.data; // Asegúrate de que esta estructura coincida con la respuesta de tu API
}

export async function fetchAnimeStaff() {
  const response = await fetch('https://api.jikan.moe/v4/anime/${id}/staff'); // Ajusta el endpoint según tu necesidad
  if (!response.ok) {
    throw new Error('Error al obtener la lista de animes');
  }
  const data = await response.json();
  return data.data; // Asegúrate de que esta estructura coincida con la respuesta de tu API
}

export async function fetchAnimeReviews() {
  const response = await fetch('https://api.jikan.moe/v4/anime/${id}/reviews'); // Ajusta el endpoint según tu necesidad
  if (!response.ok) {
    throw new Error('Error al obtener la lista de animes');
  }
  const data = await response.json();
  return data.data; // Asegúrate de que esta estructura coincida con la respuesta de tu API
}