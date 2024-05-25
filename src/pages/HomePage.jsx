// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Common/Button';  // Assurez-vous que le chemin vers le composant Button est correct

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Bienvenue sur notre plateforme de gestion de projets</h1>
      <p>Connectez-vous pour accéder à vos projets ou inscrivez-vous pour créer un compte.</p>
      <div className="button-group">
        <Link to="/login">
          <Button label="Connexion" />
        </Link>
        <Link to="/register">
          <Button label="Inscription" />
        </Link>
        <Link to="/projects">
          <Button label="Voir les projets publics" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
