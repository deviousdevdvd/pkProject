import React, { useState, useEffect } from 'react';
import { getTask, deleteTask } from '../../services/taskService';
import { useNavigate } from 'react-router-dom';
import Button from '../Common/Button';

const TaskDetail = ({ projectId, taskId }) => {
  const [task, setTask] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const taskData = await getTask(projectId, taskId);
        setTask(taskData.data);
      } catch (error) {
        setError('Erreur lors de la récupération de la tâche.');
      }
    };

    fetchTask();
  }, [projectId, taskId]);

  const handleDelete = async () => {
    try {
      await deleteTask(projectId, taskId);
      navigate(`/projects/${projectId}`); // Redirection vers les détails du projet après suppression
    } catch (error) {
      setError('Erreur lors de la suppression de la tâche.');
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!task) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="task-detail">
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Date d'échéance: {new Date(task.dueDate).toLocaleDateString()}</p>
      <Button onClick={handleDelete} label="Supprimer la tâche" />
    </div>
  );
};

export default TaskDetail;
