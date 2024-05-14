import React, { useEffect, useState } from 'react';
import { createTask } from '/Users/melbo/pkProjetBackend/pkprojetfront/src/services/taskService'; // Suppose this is your task creation API call
import { getProjects } from '/Users/melbo/pkProjetBackend/pkprojetfront/src/services/projectService'
import { useHistory, useNavigate } from 'react-router-dom';

const TaskForm = ({ projectId }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    projetctLier :'',
    dueDate: ''
  });

  const [error, setError] = useState('');
  const history = useNavigate();

  const [projects, setProjects] = useState([]);

      useEffect(() => {
        const fetchProjects = async () => {
          try {
            const response = await getProjects();
            setProjects(response.data);
          } catch (error) {
            console.error('Erreur lors de la récupération des projets:', error);
          }
        };

        fetchProjects();
      }, []);
      

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendTaskToApi(task);
      history.push(`/projects/${projectId}`); // Redirection vers les détails du projet
    } catch (error) {
      setError(error.response?.data?.message || 'Une erreur est survenue lors de la création de la tâche.');
    }
  };

  const sendTaskToApi = async (taskData) => {
    try {
      const response = await createTask(taskData);
      console.log('Tâche créée avec succès:', response.data);
    } catch (error) {
      console.error('Erreur lors de la création de la tâche:', error);
      throw error;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <div>
        <label htmlFor="title">Titre:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={task.description}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="project">Projet associé:</label>
        <select
          id="project"
          name="projetctLier"
          value={task.projetctLier}
          onChange={handleChange}
          required
        >
          <option value="">Sélectionner un projet</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>{project.title}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="dueDate">Date d'échéance:</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Créer Tâche</button>
    </form>
  );
};

export default TaskForm;
