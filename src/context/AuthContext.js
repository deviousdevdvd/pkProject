import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService, registerService, logoutService, getCurrentUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Ajout de la gestion des erreurs
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        console.error('Failed to fetch current user:', error);
        setError(error.message); // Mise à jour de l'état d'erreur
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null); // Réinitialiser les erreurs avant la tentative de connexion
    try {
      const user = await loginService(email, password);
      setCurrentUser(user);
      navigate('/dashboard'); // Redirection vers le tableau de bord après connexion
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.message); // Mise à jour de l'état d'erreur
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    setIsLoading(true);
    setError(null); // Réinitialiser les erreurs avant la tentative d'inscription
    try {
      const user = await registerService(userData);
      setCurrentUser(user);
      navigate('/dashboard'); // Redirection vers le tableau de bord après inscription
    } catch (error) {
      console.error('Registration failed:', error);
      setError(error.message); // Mise à jour de l'état d'erreur
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await logoutService();
      setCurrentUser(null);
      navigate('/login'); // Redirection vers la page de connexion après déconnexion
    } catch (error) {
      console.error('Logout failed:', error);
      setError(error.message); // Mise à jour de l'état d'erreur
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout, isLoading, error }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
