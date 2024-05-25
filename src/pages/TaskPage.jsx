import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import TaskList from '../components/Project/TaskList';
import TaskDetail from '../components/Task/TaskDetail';

const TaskPage = () => {
  const { projectId } = useParams();

  return (
    <div>
      <Routes>
        <Route path="/" element={<TaskList projectId={projectId} />} />
        <Route path="tasks/:taskId" element={<TaskDetailWrapper projectId={projectId} />} />
      </Routes>
    </div>
  );
};

const TaskDetailWrapper = ({ projectId }) => {
  const { taskId } = useParams();

  return <TaskDetail projectId={projectId} taskId={taskId} />;
};

export default TaskPage;
