import React, { useState } from 'react';
import { register } from '../services/authService'; // Suppose this is your registration API call
import { useHistory, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nom : '',
    prenom : ''
  });

  const [error, setError] = useState('');
  const history = useNavigate(); // Initialisez le hook pour la redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      // Handle password mismatch
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    try {
      
        const newUser = {
            ...user,
            dateInscription: new Date().toISOString(), // Ajoutez la date d'inscription
            role: 'membre', // Définissez le rôle à 'membre'
          };
          delete newUser.confirmPassword; //  Supprimez confirmPassword avant l'envoi

        
          await register(newUser);
          // Redirection vers la page de connexion ou une autre page pertinente après l'inscription
          history.push('/login'); // Remplacez '/login' par votre route de connexion
        } catch (error) {
          // Affichez le message d'erreur de l'API ou un message d'erreur par défaut
          setError(error.response?.data?.message || 'Une erreur est survenue lors de l’inscription.');
        }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}  
      <div>
        <TextInput
          label="Email:"
          name="email"
          value={user.email}
          onChange={handleChange}
          type="email"
          required
        />
      </div>
      <div>
        <TextInput
          label="Mot de passe :"
          name="password"
          value={user.password}
          onChange={handleChange}
          type="password"
          required
        />
      </div>
      <div>
        <TextInput
          label="Confirmation Mot de passe :"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          type="password"
          required
        />
      </div>
      <div>
        <TextInput
          label="Nom :"
          name="nomMembre"
          value={user.nom}
          onChange={handleChange}
          type="text"
          required
        />
      </div>
      <div>
        <TextInput
          label="Prénom :"
          name="prenomMembre"
          value={user.prenom}
          onChange={handleChange}
          type="text"
          required
        />
      </div>
      <Button label="Inscription" type="submit" />
    </form>
  );
};

export default RegisterForm;
