import React from 'react';
import './NumberInput.css';

const NumberInput = ({ label, name, value, onChange, min = 2, max = 8, required = false }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        required={required}
      />
    </div>
  );
};

export default NumberInput;
