// src/pages/RegisterPage.jsx
import React from 'react';
import RegisterForm from '../components/Auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="register-page">
      <h1>Register</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
