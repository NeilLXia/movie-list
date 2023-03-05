import React from 'react';
import databaseAccess from '../../scripts/databaseAccess.js';

const pullMoviesData = databaseAccess.pullMoviesData;

let focusHandler = (event) => {
  let allTabs = document.getElementsByClassName('tabfilter');
  Array.prototype.forEach.call(allTabs, (tab) => tab.classList.remove('selected-tab'));

  document.getElementById(event.target.id).classList.add('selected-tab');
}

let filterByTab = (event, callback) => {
  focusHandler(event);
  callback();
};

const MovieTabs = ({currentQuery, setCurrentQuery}) => {
  return (
    <div className="movie-tabs">
      <button id="allmovies-tab" className="tabfilter"onClick={(event) =>
        filterByTab(event, () => setCurrentQuery({});
      )}>All Movies</button>

      <button id="watched-tab" className="tabfilter" onClick={(event) =>
        filterByTab(event, () => {
          let newQuery = {...currentQuery};
          newQuery.watched = 1;
          setCurrentQuery(newQuery);
        })}>Watched</button>

      <button id="towatch-tab" className="tabfilter" onClick={(event) =>
        filterByTab(event, () => {
          let newQuery = {...currentQuery};
          newQuery['watched'] = 0;
          setCurrentQuery(newQuery);
        })}>To Watch</button>
    </div>
)};

export default MovieTabs;