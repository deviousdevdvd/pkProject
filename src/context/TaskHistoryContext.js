import React, { createContext, useState, useContext, useEffect } from 'react';

const TaskHistoryContext = createContext();

export const useTaskHistory = () => {
  const context = useContext(TaskHistoryContext);
  if (!context) {
    throw new Error('useTaskHistory must be used within a TaskHistoryProvider');
  }
  return context;
};

export const TaskHistoryProvider = ({ children }) => {
  const [taskHistory, setTaskHistory] = useState([]);

  useEffect(() => {
    // Ici, vous feriez appel à votre service pour récupérer l'historique des tâches
    // La logique d'appel API devrait être ajoutée ici.
  }, []);

  return (
    <TaskHistoryContext.Provider value={{ taskHistory, setTaskHistory }}>
      {children}
    </TaskHistoryContext.Provider>
  );
};
