// src/services/meetingService.js
import axios from 'axios';

const API_URL = 'http://yourapi.com/meetings'; // Remplacez par l'URL de votre API

export const getMeetings = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createMeeting = async (meetingData) => {
  try {
    const response = await axios.post(API_URL, meetingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMeeting = async (meetingId, meetingData) => {
  try {
    const response = await axios.put(`${API_URL}/${meetingId}`, meetingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMeeting = async (meetingId) => {
  try {
    const response = await axios.delete(`${API_URL}/${meetingId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMeetingById = async (meetingId) => {
    try {
      const response = await axios.get(`${API_URL}/${meetingId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };