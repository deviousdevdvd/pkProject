import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService, registerService, logoutService } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in on mount
    const fetchCurrentUser = async () => {
      try {
        const user = await getCurrentUser(); // Assume you have a service to get the current user
        setCurrentUser(user);
      } catch (error) {
        console.error('Failed to fetch current user:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const user = await loginService(email, password);
      setCurrentUser(user);
      navigate('/dashboard'); // Redirect to dashboard on login
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    setIsLoading(true);
    try {
      const user = await registerService(userData);
      setCurrentUser(user);
      navigate('/dashboard'); // Redirect to dashboard on registration
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await logoutService();
      setCurrentUser(null);
      navigate('/login'); // Redirect to login on logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout, isLoading }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
