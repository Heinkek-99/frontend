import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const fetchProduits = () => axios.get(`${API_URL}/produits`);
export const addProduit = (data) => axios.post(`${API_URL}/produits`, data);
export const updateProduit = (id, produit) =>
    axios.put(`${API_URL}/produits/${id}`, produit);
export const deleteProduit = (id) => axios.delete(`${API_URL}/produits/${id}`);

export const fetchCategories = () => axios.get(`${API_URL}/categories`);
export const addCategorie = (categorie) =>
    axios.post(`${API_URL}/categories`, categorie);
export const updateCategorie = (id, updatedCategorie) =>
    axios.put(`${API_URL}/categories/${id}`, updatedCategorie);
  
export const deleteCategorie = (id) => axios.delete(`${API_URL}/categories/${id}`);
  