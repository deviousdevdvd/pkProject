import axios from 'axios';

const API_URL = 'http://yourapi.com/project-notifications';

export const getNotifications = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data; // Supposons que cela renvoie les notifications des projets
  } catch (error) {
    throw error;
  }
};
