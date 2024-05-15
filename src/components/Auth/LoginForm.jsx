import React, { useState, useContext } from 'react';
import { AuthContext } from '/Users/melbo/pkProjetBackend/pkprojetfront/src/context/AuthContext';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials.email, credentials.password);
      // Redirect to dashboard or handle success
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
      <button type="submit">Connection</button>
    </form>
  );
};

export default LoginForm;
