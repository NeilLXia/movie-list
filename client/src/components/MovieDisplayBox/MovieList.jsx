import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = ({moviesData, currentQuery, setCurrentQuery}) => {
  let renderMovies = '';

  if (moviesData.length > 0) {
    renderMovies = moviesData.map((movie) => (
      <MovieListItem key={movie.movieID} movie={movie} currentQuery={currentQuery} setCurrentQuery={setCurrentQuery}/>
    ));
  } else { renderMovies = 'No Movies Found'; }

  return (
    <div className="movie-list">
      {renderMovies}
    </div>
)};

export default MovieList;