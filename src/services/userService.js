import axios from 'axios';

const API_URL = 'http://yourapi.com/user'; // Adaptez cela à l'URL de base de votre API utilisateur

// Récupérer les données d'un utilisateur par son ID
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Mettre à jour les informations d'un utilisateur
export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${API_URL}/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Récupérer les points d'un utilisateur
export const getUserPoints = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}/points`);
    return response.data.points; // Suppose que la réponse inclut un objet avec une propriété 'points'
  } catch (error) {
    throw error;
  }
};

// Exemple de suppression d'un utilisateur
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL}/${userId}`);
    return response.data; // Généralement vide pour une suppression
  } catch (error) {
    throw error;
  }
};


/*API_URL : L'URL de base pour vos appels API liés aux utilisateurs. Modifiez-la pour qu'elle corresponde à votre configuration de backend.
getUserById : Récupère les données d'un utilisateur spécifique en utilisant son ID.
updateUser : Met à jour les informations de l'utilisateur. Vous devez passer l'ID de l'utilisateur et les données à mettre à jour.
getUserPoints : Récupère les points d'un utilisateur, ce qui pourrait être utile pour un système de récompenses ou de gamification.
deleteUser : Supprime un utilisateur. Cette fonction pourrait être utilisée par des administrateurs ou dans des cas spécifiques où un utilisateur veut fermer son compte.*/