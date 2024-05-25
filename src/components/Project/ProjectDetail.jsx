// src/components/Project/ProjectDetail.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Common/Button';
import TaskList from '../components/Project/TaskList';

const ProjectDetail = ({ project, projectId, handleDelete }) => (
  <div className="project-detail">
    <h1>{project.title}</h1>
    <p>{project.description}</p>
    <p>Date de début: {new Date(project.startDate).toLocaleDateString()}</p>
    <p>Date de fin: {new Date(project.endDate).toLocaleDateString()}</p>
    <Link to={`/projects/${projectId}/edit`}>Modifier le projet</Link>
    <Button onClick={handleDelete} label="Supprimer le projet" />
    <h2>Tâches</h2>
    <TaskList projectId={projectId} />
    <Link to={`/projects/${projectId}/tasks/new`}>Ajouter une nouvelle tâche</Link>
  </div>
);

export default ProjectDetail;
