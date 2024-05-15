import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenue sur notre plateforme de gestion de projets</h1>
      <p>Connectez-vous pour accéder à vos projets ou inscrivez-vous pour créer un compte.</p>
      <Link to="/login">
        <Button label="Connexion" />
      </Link>
      <Link to="/register">
        <Button label="Inscription"/>
      </Link>
      <Link to="/projects">
        <Button label="Voir les projets publics" />
      </Link>
    </div>
  );
};

export default HomePage;
