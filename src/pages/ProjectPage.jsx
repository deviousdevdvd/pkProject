import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory, useNavigate } from 'react-router-dom';
import { getProjects, deleteProject } from '/Users/melbo/pkProjetBackend/pkprojetfront/src/services/projectService';
import TaskList from '../components/Project/TaskList';

const ProjectPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState('');
  const history = useNavigate();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await getProjects(projectId);
        setProject(projectData.data);
      } catch (error) {
        setError('Erreur lors de la récupération du projet.');
      }
    };

    fetchProject();
  }, [projectId]);

  const handleDelete = async () => {
    try {
      await deleteProject(projectId);
      history.push('/projects'); // Redirection vers la liste des projets après suppression
    } catch (error) {
      setError('Erreur lors de la suppression du projet.');
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!project) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>Date de début: {new Date(project.startDate).toLocaleDateString()}</p>
      <p>Date de fin: {new Date(project.endDate).toLocaleDateString()}</p>
      <Link to={`/projects/${projectId}/edit`}>Modifier le projet</Link>
      <button onClick={handleDelete}>Supprimer le projet</button>
      <h2>Tâches</h2>
      <TaskList projectId={projectId} />
      <Link to={`/projects/${projectId}/tasks/new`}>Ajouter une nouvelle tâche</Link>
    </div>
  );
};

export default ProjectPage;
