import React, { useState } from 'react';
import { createProject } from '/Users/melbo/pkProjetBackend/pkprojetfront/src/services/projectService'; // Suppose this is your project creation API call
import { useHistory, useNavigate } from 'react-router-dom';

const ProjectForm = () => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    startDate: '',
    nbtask : "",
    endDate: ''
  });

  const [error, setError] = useState('');
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProject(project);
      history.push('/projects'); // Redirection vers la liste des projets
    } catch (error) {
      setError(error.response?.data?.message || 'Une erreur est survenue lors de la création du projet.');
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
          value={project.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={project.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="startDate">Date de début:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={project.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="taskCount">Nombre de tâches effectuées pour le projet (entre 2 et 8):</label>
        <input
          type="number"
          id="taskCount"
          name="taskCount"
          value={project.nbtask}
          onChange={handleChange}
          min={2}
          max={8}
          required
        />
      </div>
      <div>
        <label htmlFor="endDate">Date de fin:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={project.endDate}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Créer Projet</button>
    </form>
  );
};

export default ProjectForm;
