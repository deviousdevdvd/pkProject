import React, { useEffect, useState } from 'react';
import { createTask } from '/Users/melbo/pkProjetBackend/pkprojetfront/src/services/taskService'; // Suppose this is your task creation API call
import { getProjects } from '/Users/melbo/pkProjetBackend/pkprojetfront/src/services/projectService'
import { useHistory, useNavigate } from 'react-router-dom';
import RadioNumberInput from '../Common/RadioNumberInput';

const TaskForm = ({ projectId }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    projetctLier :'',
    levelTask: '',
    dueDate: ''
  });

  const [error, setError] = useState('');
  const history = useNavigate();

  const [projects, setProjects] = useState([]);

      useEffect(() => {
        const fetchProjects = async () => {
          try {
            const response = await getProjects();
            setProjects(response.data);
          } catch (error) {
            console.error('Erreur lors de la récupération des projets:', error);
          }
        };

        fetchProjects();
      }, []);
      

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendTaskToApi(task);
      history.push(`/projects/${projectId}`); // Redirection vers les détails du projet
    } catch (error) {
      setError(error.response?.data?.message || 'Une erreur est survenue lors de la création de la tâche.');
    }
  };

  const sendTaskToApi = async (taskData) => {
    try {
      const response = await createTask(taskData);
      console.log('Tâche créée avec succès:', response.data);
    } catch (error) {
      console.error('Erreur lors de la création de la tâche:', error);
      throw error;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      
        <TextInput
          label="Titre:"
          name="title"
          value={task.title}
          onChange={handleChange}
          type="text"
          required
        />
      
        <TextArea
          label="Description:"
          name="description"
          value={task.description}
          onChange={handleChange}
          required
        />
      
      
      <ProjectSelect
        label="Projet associé:"
        name="projetctLier"
        value={task.projetctLier}
        onChange={handleChange}
        required
      />
      <RadioNumberInput
        label= "Difficulté de la tâche"
        name="levelTask"
        value={task.levelTask}
        onChange={handleChange}
        required
      />  
      <DateInput
        label="Date d'échéance:"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        required
      />
      <Button type="submit">Créer Tâche</Button>
    </form>
  );
};

export default TaskForm;
