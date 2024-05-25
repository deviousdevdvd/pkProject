import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from 'Users/melbo/pkProjetBackend/pkprojetfront/src/context/AuthContext.js';

const PrivateRoute = ({ element, roles }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    // Not logged in
    return <Navigate to="/login" />;
  }

  if (roles && roles.indexOf(currentUser.role) === -1) {
    // Role not authorized
    return <Navigate to="/dashboard" />;
  }

  return element;
};

export default PrivateRoute;
