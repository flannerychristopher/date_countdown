import React from 'react';
import '../App.css';

const TextInput = ({ onInputChange, onDateInput }) => {
  return (
    <div>
      <p>type a month and date or choose one below:</p>
      <input
        placeholder='month and date'
        onChange={event => onInputChange(event)} 
      />
      <button onClick={() => onDateInput()}>Submit</button>
    </div>
  );
}

export default TextInput;