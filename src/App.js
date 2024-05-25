import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import ProjectList from './components/ProjectList';
import ProjectPage from './components/ProjectPage';
import ProjectForm from './components/ProjectForm';
import TaskForm from './components/TaskForm';
import TaskPage from './components/TaskPage';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import UserProfile from './components/UserProfile';
import UserManagement from './components/UserManagement';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';
import { AuthProvider } from './context/AuthContext';
import MeetingPage from './pages/MeetingPage';
import TaskList from './components/Project/TaskList';
import MeetingForm from './components/Meeting/MeetingForm';
import MeetingDetail from './components/Meeting/MeetingDetail';

const App = () => {
  return (
    <Router>
      <AuthProvider>
      <UserProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/projects/new" element={<PrivateRoute element={<ProjectForm />} />} />
        <Route path="/projects/:projectId/tasks/new" element={<PrivateRoute element={<TaskForm />} />} />
        <Route path="/projects/:projectId/tasks/*" element={<PrivateRoute element={<TaskPage />} />} />
        <Route path="/projects/:projectId" element={<PrivateRoute element={<ProjectPage />} />} />
        <Route path="/projects" element={<PrivateRoute element={<ProjectList />} />} />
        <Route path="/tasks" element={<PrivateRoute element={<TaskList />} />} />
        <Route path="/profile" element={<PrivateRoute element={<UserProfile />} />} />
        <Route path="/admin/users" element={<PrivateRoute element={<UserManagement />} roles={['admin']}/>} />
        <Route path="/meetings" element={<PrivateRoute element={<MeetingPage />} />} />
        <Route path="/meetings/new" element={<PrivateRoute element={<MeetingForm />} roles={['admin']} />} />
        <Route path="/meetings/:meetingId" element={<PrivateRoute element={<MeetingDetail />} />} />
      </Routes>
      </UserProvider>
      </AuthProvider>
           
    </Router>
  );
};

export default App;
