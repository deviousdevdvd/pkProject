import React from 'react';


const TextArea = ({ label, name, value, onChange, required = false }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextArea;
