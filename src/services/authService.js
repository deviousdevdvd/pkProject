import axios from 'axios';

const API_URL = 'http://yourapi.com/auth'; // Change this to your API URL

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async ({ email, password, name, firstName }) => {
    const dateInscription = new Date().toISOString(); // La date actuelle au format ISO
    const role = 'membre'; // Le rôle par défaut pour les nouveaux utilisateurs
    try {
      const response = await axios.post(`${API_URL}/register`, {
        email,
        password,
        name,
        firstName,
        dateInscription,
        role
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};
