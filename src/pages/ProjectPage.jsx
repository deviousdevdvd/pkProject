import React, { useState, useEffect } from 'react';
import { useParams, Link,  useNavigate } from 'react-router-dom';
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
      history('/projects'); // Redirection vers la liste des projets après suppression
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
    <div className="project-page">
      <ProjectDetail project={project} projectId={projectId} handleDelete={handleDelete} />
    </div>
  );
};

export default ProjectPage;
