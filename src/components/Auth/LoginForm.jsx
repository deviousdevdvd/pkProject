import React, { useState, useContext } from 'react';
import { AuthContext } from '/Users/melbo/pkProjetBackend/pkprojetfront/src/context/AuthContext';
import TextInput from '../Common/TextInput.jsx';
import Button from '../Common/Button.jsx';
import { useNavigate } from 'react-router-dom/dist/index.js';


const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials.email, credentials.password);
      // Redirect to dashboard or handle success
      navigate('/dashboard')
    } catch (error) {
      // Handle errors (e.g., display error messages)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextInput
          label="Email:"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          type="email"
          required
        />
      </div>
      <div>
        <TextInput
          label="Mot de passe:"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          type="password"
          required
        />
      </div>
      <Button type="submit">Connection</Button>
    </form>
  );
};

export default LoginForm;
