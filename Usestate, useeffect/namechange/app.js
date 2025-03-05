// App.js
import React, { useState } from 'react';
import Employee from './Employee';

const App = () => {
  // Sample employee data
  const initialEmployees = [
    { id: 1, name: 'John Doe', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', department: 'Marketing' },
  ];

  // Using the useState hook to manage employee data
  const [employees, setEmployees] = useState(initialEmployees);

  // Handle name change in the parent component
  const handleNameChange = (id, newName) => {
    const updatedEmployees = employees.map((employee) => 
      employee.id === id ? { ...employee, name: newName } : employee
    );
    setEmployees(updatedEmployees); // Update the employee state
  };

  return (
    <div>
      <h1>Employee Information</h1>
      {employees.map((employee) => (
        <Employee
          key={employee.id}
          id={employee.id}
          name={employee.name}
          department={employee.department}
          onNameChange={handleNameChange}
        />
      ))}
    </div>
  );
};

export default App;
