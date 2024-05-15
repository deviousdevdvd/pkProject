import React from 'react';
import './DateInput.css';

const DateInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="date"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default DateInput;
