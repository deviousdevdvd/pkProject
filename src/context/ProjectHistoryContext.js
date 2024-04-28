import React, { createContext, useState, useContext } from 'react';
import { getProjectHistory } from '../services/historyService';

const ProjectHistoryContext = createContext();

export const useProjectHistory = () => {
  const context = useContext(ProjectHistoryContext);
  if (!context) {
    throw new Error('useProjectHistory must be used within a ProjectHistoryProvider');
  }
  return context;
};

export const ProjectHistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const historyData = await getProjectHistory();
        setHistory(historyData);
      } catch (error) {
        console.error('Failed to fetch project history:', error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <ProjectHistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </ProjectHistoryContext.Provider>
  );
};
