import React, { useState, useContext } from 'react';
import { createProject } from '../services/projectService';
import { useProjects } from '../context/ProjectContext';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const { addProject } = useProjects();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProject = await createProject({ name: projectName });
    addProject(newProject);
    setProjectName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Enter project name"
      />
      <button type="submit">Create Project</button>
    </form>
  );
};

export default ProjectForm;
