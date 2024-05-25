// src/pages/DashboardPage.jsx
import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/projectService';
import { getTasks } from '../services/taskService';
import ProjectList from '../components/Project/ProjectList';
import TaskList from '../components/Project/TaskList';

const DashboardPage = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };

    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };

    fetchProjects();
    fetchTasks();
  }, []);

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <ProjectList projects={projects} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default DashboardPage;
