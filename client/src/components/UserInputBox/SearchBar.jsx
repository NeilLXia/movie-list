import React from 'react';
import databaseAccess from '../../scripts/databaseAccess.js';

const filterByName = databaseAccess.pullMoviesData;

const SearchBar = ({currentQuery, setCurrentQuery}) => {
  let searchHandler = () => {
    let newQuery = {};

    if (document.getElementById('search-input').value !== '') {
      newQuery = {title: document.getElementById('search-input').value};
    }
    if (currentQuery.watched !== undefined) {
      newQuery.watched = currentQuery.watched;
    }

    setCurrentQuery(newQuery);
    document.getElementById('search-input').value = '';
  }

  return (
    <div className="search header-bar">
      <input id="search-input" type="text" placeholder="Search..."
        onKeyDown={() => {
          if (event.key === 'Enter') { searchHandler() }
        }}/>
      <button id="search-button" onClick={searchHandler}>Find</button>
    </div>
)};

export default SearchBar;