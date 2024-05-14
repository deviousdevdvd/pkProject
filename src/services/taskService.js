// services/taskService.js
import axios from 'axios';

const API_URL = '/api/projects';

export const getTasks = (projectId) => axios.get(`${API_URL}/${projectId}/tasks`);
export const getTask = (projectId, taskId) => axios.get(`${API_URL}/${projectId}/tasks/${taskId}`);
export const createTask = (projectId, task) => axios.post(`${API_URL}/${projectId}/tasks`, task);
export const updateTask = (projectId, taskId, task) => axios.put(`${API_URL}/${projectId}/tasks/${taskId}`, task);
export const deleteTask = (projectId, taskId) => axios.delete(`${API_URL}/${projectId}/tasks/${taskId}`);

