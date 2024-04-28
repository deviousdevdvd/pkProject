import React, { createContext, useState, useEffect } from 'react';
import { login as apiLogin, register as apiRegister } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Supposons que vous ayez une fonction `checkUserSession` qui vérifie la session courante
    // Vous devrez l'implémenter dans votre service d'authentification
    const checkUserSession = async () => {
      setIsLoading(true);
      // Logique pour vérifier si l'utilisateur est déjà connecté
      setIsLoading(false);
    };

    checkUserSession();
  }, []);

  const login = async (email, password) => {
    const user = await apiLogin(email, password);
    setCurrentUser(user);
  };

  const register = async (user) => {
    const newUser = await apiRegister(user);
    setCurrentUser(newUser);
  };

  const logout = () => {
    // Logique pour déconnecter l'utilisateur
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout, isLoading }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
