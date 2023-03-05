import React from 'react';

import MovieTabs from './MovieDisplayBox/MovieTabs.jsx';
import MovieList from './MovieDisplayBox/MovieList.jsx';


const MovieDisplayBox = ({moviesData, currentQuery, setCurrentQuery}) => {
  return (
    <div className="moviedisplay-box">
      <MovieTabs currentQuery = {currentQuery} setCurrentQuery = {setCurrentQuery}/>
      <MovieList moviesData = {moviesData} currentQuery = {currentQuery} setCurrentQuery = {setCurrentQuery}/>
    </div>
)};

export default MovieDisplayBox;