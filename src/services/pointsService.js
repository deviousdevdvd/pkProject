import axios from 'axios';

const API_URL = 'http://yourapi.com/points'; // Adaptez cela à l'URL de base de votre API pour les points

// Récupérer les points d'un utilisateur
export const getUserPoints = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data.points; // Suppose que la réponse inclut un objet avec une propriété 'points'
  } catch (error) {
    throw error;
  }
};

// Ajouter des points à un utilisateur
export const addPointsToUser = async (userId, pointsToAdd) => {
  try {
    const response = await axios.post(`${API_URL}/add`, {
      userId,
      points: pointsToAdd
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Soustraire des points à un utilisateur
export const subtractPointsFromUser = async (userId, pointsToSubtract) => {
  try {
    const response = await axios.post(`${API_URL}/subtract`, {
      userId,
      points: pointsToSubtract
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Exemple de fonction pour récupérer le classement des utilisateurs par points
export const getLeaderboard = async () => {
  try {
    const response = await axios.get(`${API_URL}/leaderboard`);
    return response.data; // Suppose que cela retourne une liste d'utilisateurs classés par points
  } catch (error) {
    throw error;
  }
};
 


/*Explication des fonctions :
getUserPoints : Récupère le nombre actuel de points d'un utilisateur spécifié par son ID.
addPointsToUser : Ajoute un nombre spécifié de points au solde de points d'un utilisateur. Utile pour récompenser les utilisateurs pour certaines actions.
subtractPointsFromUser : Soustrait un nombre spécifié de points du solde de points d'un utilisateur. Utile pour pénaliser ou pour des achats avec des points.
getLeaderboard : Récupère une liste d'utilisateurs avec leurs points pour afficher un classement. Peut être utilisé pour promouvoir la compétition ou la gamification.*/