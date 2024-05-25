import React, { useState, useEffect } from 'react';
import { getProjects } from '/Users/melbo/pkProjetBackend/pkprojetfront/src/services/projectService'; // Suppose this is your project fetching API call
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import Button from '../Common/Button';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

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

  const viewProject = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <div>
      <h2>Liste des Projets</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <span>{project.title}</span>
            <Button onClick={() => viewProject(project.id)} label="Voir le projet" />
          </li>
        ))}
      </ul>
      <Link to="/projects/new">Créer un nouveau projet</Link>
    </div>
  );
};

export default ProjectList;
