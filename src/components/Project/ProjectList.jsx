import React, { useState, useEffect } from 'react';
import { getProjects } from '/Users/melbo/pkProjetBackend/pkprojetfront/src/services/projectService'; // Suppose this is your project fetching API call
import { Link } from 'react-router-dom';

const ProjectList = () => {
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

  return (
    <div>
      <h2>Liste des Projets</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <span>{project.title}</span>
            <Link to={`/projects/${project.id}`}>Voir le projet</Link>
          </li>
        ))}
      </ul>
      <Link to="/projects/new">Créer un nouveau projet</Link>
    </div>
  );
};

export default ProjectList;
