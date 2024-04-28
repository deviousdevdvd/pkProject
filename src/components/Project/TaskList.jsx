import React, { useEffect, useContext } from 'react';
import { useTasks } from '../context/TaskContext';
import { getTasks } from '../services/taskService';

const TaskList = ({ projectId }) => {
  const { tasks, setTasks } = useTasks();

  useEffect(() => {
    const fetchTasks = async () => {
      const loadedTasks = await getTasks(projectId);
      setTasks(loadedTasks);
    };

    fetchTasks();
  }, [projectId, setTasks]);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </div>
  );
};

export default TaskList;
