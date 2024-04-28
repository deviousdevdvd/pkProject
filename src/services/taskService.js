import axios from 'axios';

const API_URL = 'http://yourapi.com/tasks';

export const getTasks = async (projectId) => {
  try {
    const response = await axios.get(`${API_URL}`, { params: { projectId } });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTask = async (taskData) => {
  try {
    const response = await axios.post(`${API_URL}`, taskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
