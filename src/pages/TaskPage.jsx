import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useNavigate } from 'react-router-dom';
import { getTask, deleteTask } from '../services/taskService';

const TaskPage = () => {
  const { projectId, taskId } = useParams();
  const [task, setTask] = useState(null);
  const [error, setError] = useState('');
  const history = useNavigate();

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
      history.push(`/projects/${projectId}`); // Redirection vers les détails du projet après suppression
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
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Date d'échéance: {new Date(task.dueDate).toLocaleDateString()}</p>
      <button onClick={handleDelete}>Supprimer la tâche</button>
    </div>
  );
};

export default TaskPage;
