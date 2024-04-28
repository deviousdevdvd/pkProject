import React, { createContext, useState, useContext } from 'react';
import { getNotifications } from '../services/notificationService';

const TaskNotificationContext = createContext();

export const useTaskNotifications = () => {
  const context = useContext(TaskNotificationContext);
  if (!context) {
    throw new Error('useTaskNotifications must be used within a TaskNotificationProvider');
  }
  return context;
};

export const TaskNotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const notificationsData = await getNotifications();
        setNotifications(notificationsData);
      } catch (error) {
        console.error('Failed to fetch task notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <TaskNotificationContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </TaskNotificationContext.Provider>
  );
};
