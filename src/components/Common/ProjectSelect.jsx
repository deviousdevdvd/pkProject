import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProjectSelect.css';

const ProjectSelect = ({ label, name, value, onChange, required = false }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects'); // Remplacez par l'URL de votre API
        setProjects(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange} required={required}>
        <option value="">Sélectionner un projet</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectSelect;
