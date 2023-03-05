import React from 'react';
import databaseAccess from '../../scripts/databaseAccess.js';

const addMovie = databaseAccess.addMovie;
const pullMoviesData = databaseAccess.pullMoviesData;

const MovieAdder = ({currentQuery, setCurrentQuery}) => {

  let addHandler = () => {
    addMovie(document.getElementById('add-movie-inputbox').value, () => {
      let newQuery = {...currentQuery};
      setCurrentQuery(newQuery);
    });
    document.getElementById('add-movie-inputbox').value = '';
  }

  return (
    <div className="add-movie header-bar">
      <input id="add-movie-inputbox" type="text" placeholder="Add movie title here"
        onKeyDown={() => {if (event.key === 'Enter') {addHandler()}}}/>
      <button id="add-movie-button" onClick={addHandler}>Add</button>
    </div>
)};

export default MovieAdder;