import React, { useState } from 'react';
import Car from './Car';  

const CarRentalSystem = () => {
  const initialCars = [
    { id: 1, model: 'Toyota Camry', year: 2020, rentalPrice: 50 },
    { id: 2, model: 'Honda Accord', year: 2021, rentalPrice: 60 },
    { id: 3, model: 'Ford Mustang', year: 2022, rentalPrice: 100 },
  ];

  const [cars, setCars] = useState(initialCars);

  // Update rental price of a specific car
  const handleRentalPriceChange = (id, updatedPrice) => {
    const updatedCars = cars.map((car) =>
      car.id === id ? { ...car, rentalPrice: updatedPrice } : car
    );
    setCars(updatedCars);
  };

  return (
    <div className="car-rental-system">
      <h2>Car Rental System</h2>
      {cars.map((car) => (
        <Car
          key={car.id}
          id={car.id}
          model={car.model}
          year={car.year}
          rentalPrice={car.rentalPrice}
          onRentalPriceChange={handleRentalPriceChange}
        />
      ))}
    </div>
  );
};

export default CarRentalSystem;
