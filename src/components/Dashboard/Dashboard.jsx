import React, { useContext, useEffect, useState } from 'react';
import { useUser } from '../hooks/useUser';
import PointsDisplay from './PointsDisplay';
import { getProjects } from '/Users/melbo/pkProjetBackend/pkprojetfront/src/services/projectService'

const Dashboard = () => {
  const { user } = useUser(); // Utilisez le hook useUser pour accéder aux données de l'utilisateur
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
    <div className="dashboard">
      <h1>Tableau de bord</h1>
      <p>Bienvenue, {user ? user.name : 'Chargement...'}</p>
      <PointsDisplay points={user ? user.points : 0} />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/projects/new">
        <button>Créer un nouveau projet</button>
      </Link>
      {/* Ajoutez d'autres composants liés au tableau de bord si nécessaire */}
    </div>
  );
};

export default Dashboard;
