import React, { createContext, useState, useContext, useEffect } from 'react';

// Créez le contexte utilisateur
export const UserContext = createContext();

// Fournisseur de contexte utilisateur qui enveloppera l'application ou une partie de celle-ci
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulez le chargement de données utilisateur
    const loadUserData = async () => {
      // Utilisez ici vos services pour charger les données de l'utilisateur réel
      setUser({ name: 'John Doe', points: 120 });
    };

    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte de l'utilisateur
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser doit être utilisé au sein d’un UserProvider');
  }
  return context;
};
