import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from 'Users/melbo/pkProjetBackend/pkprojetfront/src/context/AuthContext.js';

const PrivateRoute = ({ element ,roles }) => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? element : <Navigate to="/login" />;

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (roles && roles.indexOf(currentUser.role) === -1) {
    // Rediriger l'utilisateur si son rôle n'est pas autorisé
    return <Navigate to="/dashboard" />;
  }

  return element;
};



export default PrivateRoute;
