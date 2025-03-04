// App.js
import React from 'react';
import './App.css';
import MovieCard from './MovieCard';  // Import MovieCard component

function App() {
  return (
    <div className="App">
      <MovieCard 
        title="The Shawshank Redemption" 
        releaseYear="1994" 
        genre="Drama"
      />
      <MovieCard 
        title="The Dark Knight" 
        releaseYear="2008" 
        genre="Action, Crime, Drama"
      />
      <MovieCard 
        title="Inception" 
        releaseYear="2010" 
        genre="Action, Adventure, Sci-Fi"
      />
    </div>
  );
}

export default App;
