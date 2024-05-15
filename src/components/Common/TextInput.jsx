import React from 'react';
import '../../css/TextInput.css'

const TextInput = ({ label, name, value, onChange, type = 'text', required = false }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
