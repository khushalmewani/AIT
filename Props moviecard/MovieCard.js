// MovieCard.js
import React from 'react';
import './MovieCard.css';  // Make sure you have a CSS file for styling

// Functional MovieCard component
const MovieCard = ({ title, releaseYear, genre }) => {
  return (
    <div className="movie-card">
      <h2 className="movie-title">{title}</h2>
      <div className="movie-details">
        <span className="release-year">{releaseYear}</span>
        <span className="genre">{genre}</span>
      </div>
    </div>
  );
};

export default MovieCard;
