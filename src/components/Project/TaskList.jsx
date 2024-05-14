import React, { useState, useEffect } from 'react';
import { getTasks } from '/Users/melbo/pkProjetBackend/pkprojetfront/src/services/taskService';
import { Link } from 'react-router-dom';

const TaskList = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks(projectId);
        setTasks(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des tâches:', error);
      }
    };

    fetchTasks();
  }, [projectId]);

  return (
    <div>
      <h2>Liste des Tâches</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
            <Link to={`/projects/${projectId}/tasks/${task.id}`}>Voir la tâche</Link>
          </li>
        ))}
      </ul>
      <Link to={`/projects/${projectId}/tasks/new`}>Ajouter une nouvelle tâche</Link>
    </div>
  );
};

export default TaskList;
