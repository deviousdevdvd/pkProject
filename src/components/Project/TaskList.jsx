import React, { useState, useEffect } from 'react';
import { getTasks } from '/Users/melbo/pkProjetBackend/pkprojetfront/src/services/taskService';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom/dist';
import Button from '../Common/Button';

const TaskList = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

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

  const viewTask = (taskId) => {
    navigate(`/projects/${projectId}/tasks/${taskId}`);
  }

  return (
    <div>
      <h2>Liste des Tâches</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
            <Button onClick={() => viewTask(task.id)} label="Voir la tâche" />
          </li>
        ))}
      </ul>
      <Link to={`/projects/${projectId}/tasks/new`}>Ajouter une nouvelle tâche</Link>
    </div>
  );
};

export default TaskList;
