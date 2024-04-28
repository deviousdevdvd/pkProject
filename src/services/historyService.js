import axios from 'axios';

const API_URL = 'http://yourapi.com/task-history';

export const getHistory = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data; // Supposons que cela renvoie l'historique des tâches/projets
  } catch (error) {
    throw error;
  }
};
