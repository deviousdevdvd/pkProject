import React from 'react';
import '../../css/Button.css';

const Button = ({ label, onClick, type = 'button', className = '' }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
