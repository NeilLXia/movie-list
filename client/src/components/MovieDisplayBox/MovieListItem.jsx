import React from 'react';
import databaseAccess from '../../scripts/databaseAccess.js';

const toggleWatched = databaseAccess.toggleWatched;

let clickHandler = (event, movie, callback) => {
  let listItem = event.target;

  while (listItem.className !== 'movie-list-item') {
    if (listItem.parentElement === null) { break }

    listItem = listItem.parentElement;
  }

  toggleWatched(movie.movieID, callback);
}

const MovieListItem = ({movie, currentQuery, setCurrentQuery}) => {
  let watchedIcon = <div className='notwatched-icon'>Not Watched</div>;

  if (movie.watched) {
    watchedIcon = <div className='watched-icon'>Watched</div>;
  }

  return (
    <div className="movie-list-item" onClick={(event) =>
      clickHandler(event, movie, () => {
        let newQuery = {...currentQuery};
        setCurrentQuery(newQuery);
      })}>
      <div className='movie-title'>{movie.title}</div>
      <div className='movie-watched'>{watchedIcon}</div>
    </div>
)};

export default MovieListItem;