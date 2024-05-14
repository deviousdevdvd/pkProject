import React, { useContext, useState } from 'react';
import { updateUser } from 'Users/melbo/pkProjetBackend/pkprojetfront/src/services/userService';
import { useUser } from '../../hooks/useUser';

const UserProfile = () => {
    const { user, setUser } = useUser();
  const [userData, setUserData] = useState({ ...user });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await updateUser(userData);
      setCurrentUser(updatedUser);
      alert('Profil mis à jour avec succès.');
    } catch (error) {
      setError('Une erreur est survenue lors de la mise à jour du profil.');
    }
  };

  return (
    <div>
      <h1>Profil Utilisateur</h1>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="prenom">Prénom:</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={userData.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="nom">Nom:</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={userData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Mettre à jour le profil</button>
      </form>
    </div>
  );
};

export default UserProfile;
