import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/projectService';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const loadedProjects = await getProjects();
      setProjects(loadedProjects);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
};

export default ProjectList;
