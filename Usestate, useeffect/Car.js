// src/components/Car.js
import React, { useState, useEffect } from 'react';

const Car = ({ id, model, year, rentalPrice, onRentalPriceChange }) => {
  // Using state to store the local rental price
  const [localRentalPrice, setLocalRentalPrice] = useState(rentalPrice);

  // Update local rental price whenever the prop rentalPrice changes
  useEffect(() => {
    setLocalRentalPrice(rentalPrice);
  }, [rentalPrice]);

  // Handle the price change
  const handleRentalPriceChange = (event) => {
    const updatedPrice = event.target.value;
    setLocalRentalPrice(updatedPrice);  // Update local state
    onRentalPriceChange(id, updatedPrice);  // Notify parent component about the change
  };

  return (
    <div>
      <h3>{model} ({year})</h3>
      <p>Rental Price: ${localRentalPrice}</p>
      <input
        type="number"
        value={localRentalPrice}
        onChange={handleRentalPriceChange}
        min="0"
      />
    </div>
  );
};

export default Car;  // Default export
