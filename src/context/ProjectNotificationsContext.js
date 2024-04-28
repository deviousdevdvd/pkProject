import React, { createContext, useState, useContext, useEffect } from 'react';

const ProjectNotificationsContext = createContext();

export const useProjectNotifications = () => {
  const context = useContext(ProjectNotificationsContext);
  if (!context) {
    throw new Error('useProjectNotifications must be used within a ProjectNotificationsProvider');
  }
  return context;
};

export const ProjectNotificationsProvider = ({ children }) => {
  const [projectNotifications, setProjectNotifications] = useState([]);

  useEffect(() => {
    // Ici, vous feriez appel à votre service pour récupérer les notifications des projets
    // La logique d'appel API devrait être ajoutée ici.
  }, []);

  return (
    <ProjectNotificationsContext.Provider value={{ projectNotifications, setProjectNotifications }}>
      {children}
    </ProjectNotificationsContext.Provider>
  );
};
