import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from 'Users/melbo/pkProjetBackend/pkprojetfront/src/services/userService';
import Button from '../Common/Button.jsx';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        setError('Erreur lors de la récupération des utilisateurs.');
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      setError('Erreur lors de la suppression de l’utilisateur.');
    }
  };

  return (
    <div>
      <h1>Gestion des utilisateurs</h1>
      {error && <p className="error">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.prenom} {user.nom} ({user.email})</span>
            <Button onClick={() => handleDelete(user.id)}>Supprimer</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
