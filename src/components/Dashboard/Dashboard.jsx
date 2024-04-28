import React from 'react';
import { useUser } from '../hooks/useUser';
import PointsDisplay from './PointsDisplay';

const Dashboard = () => {
  const { user } = useUser(); // Utilisez le hook useUser pour accéder aux données de l'utilisateur

  return (
    <div className="dashboard">
      <h1>Tableau de bord</h1>
      <p>Bienvenue, {user ? user.name : 'Chargement...'}</p>
      <PointsDisplay points={user ? user.points : 0} />
      {/* Ajoutez d'autres composants liés au tableau de bord si nécessaire */}
    </div>
  );
};

export default Dashboard;
