import React from 'react';
import './RadioNumberInput.css';

const RadioNumberInput = ({ label, name, value, onChange, min = 1, max = 6, required = false }) => {
  const options = [];
  for (let i = min; i <= max; i++) {
    options.push(i);
  }

  return (
    <div className="radio-number-input">
      <label>{label}</label>
      <div className="radio-group">
        {options.map((option) => (
          <label key={option} className="radio-option">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={onChange}
              required={required}
            />
            <span className="radio-bubble">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioNumberInput;
