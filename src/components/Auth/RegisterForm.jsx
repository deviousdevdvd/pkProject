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
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Comfirmation Mot de passe :</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="nomMembre">Nom :</label>
        <input
          type="text"
          id="nomMembre"
          name="nomMembre"
          value={user.nom}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="prenomMembre">Prénom :</label>
        <input
          type="text"
          id="prenomMembre"
          name="prenomMembre"
          value={user.prenom}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Inscription</button>
    </form>
  );
};

export default RegisterForm;
