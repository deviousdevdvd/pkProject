import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenue sur notre plateforme de gestion de projets</h1>
      <p>Connectez-vous pour accéder à vos projets ou inscrivez-vous pour créer un compte.</p>
      <Link to="/login">
        <button>Connexion</button>
      </Link>
      <Link to="/register">
        <button>Inscription</button>
      </Link>
      <Link to="/projects">
        <button>Voir les projets publics</button>
      </Link>
    </div>
  );
};

export default HomePage;
