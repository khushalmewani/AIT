// Employee.js
import React, { useState, useEffect } from 'react';

const Employee = ({ id, name, department, onNameChange }) => {
  // Using the useState hook to store the employee's name locally
  const [localName, setLocalName] = useState(name);

  // Update the localName when the name prop changes using useEffect
  useEffect(() => {
    setLocalName(name);
  }, [name]);  // This will run when the 'name' prop changes

  // Handle the change in employee's name
  const handleNameChange = (event) => {
    const updatedName = event.target.value;
    setLocalName(updatedName);  // Update local state

    // Notify the parent component about the name change
    onNameChange(id, updatedName);
  };

  return (
    <div>
      <h3>Employee ID: {id}</h3>
      <p>Department: {department}</p>
      <p>
        <label>
          Name: 
          <input
            type="text"
            value={localName}
            onChange={handleNameChange}
          />
        </label>
      </p>
    </div>
  );
};

export default Employee;
