import React, { useState, useContext } from 'react';
import { createTask } from '../services/taskService';
import { useTasks } from '../context/TaskContext';

const TaskForm = ({ projectId }) => {
  const [taskName, setTaskName] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = await createTask({ name: taskName, projectId });
    addTask(newTask);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
