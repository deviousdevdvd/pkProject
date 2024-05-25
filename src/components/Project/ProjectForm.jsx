import React, { useState } from 'react';
import { createProject } from '/Users/melbo/pkProjetBackend/pkprojetfront/src/services/projectService'; // Suppose this is your project creation API call
import { useHistory, useNavigate } from 'react-router-dom';
import TextInput from '../Common/TextInput.jsx';
import Button from '../Common/Button.jsx';
import TextArea from '../Common/TextArea.jsx';
import NumberInput from '../Common/NumberInput.jsx'
import DateInput from '../Common/DateInput.jsx';

const ProjectForm = () => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    startDate: '',
    nbtask : "2",
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
      
        <TextInput
          label="Titre:"
          name="title"
          value={project.title}
          onChange={handleChange}
          type="text"
          required
        />
      
        <TextArea
          label="Description:"
          name="description"
          value={project.description}
          onChange={handleChange}
          required
        />
      
        <DateInput
          label="Date de début:"
          name="startDate"
          value={project.startDate}
          onChange={handleChange}
          required
        />
      <NumberInput
        label="Nombre de tâches effectuées pour le projet (entre 2 et 8):"
        name="taskCount"
        value={project.nbtask}
        onChange={handleChange}
        min={2}
        max={8}
        required
      />
      <DateInput
        label="Date de fin:"
        name="endDate"
        value={project.endDate}
        onChange={handleChange}
        required
      />
      <Button type="submit">Créer Projet</Button>
    </form>
  );
};

export default ProjectForm;
