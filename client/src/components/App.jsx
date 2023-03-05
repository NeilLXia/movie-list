import React from 'react';
import TitleBox from './TitleBox.jsx';
import UserInputBox from './UserInputBox.jsx';
import MovieDisplayBox from './MovieDisplayBox.jsx';
// import addMovie from '../scripts/addMovie.jsx';
import databaseAccess from '../scripts/databaseAccess.js';

const { useState, useEffect } = React;

const App = () => {
  // Initialization procedure
  const [moviesData, setMoviesData] = useState([]);
  const [currentQuery, setCurrentQuery] = useState({});

  useEffect(() => {
    databaseAccess.pullMoviesData({}, (data) => { setMoviesData(data) });
    document.getElementById('allmovies-tab').classList.add('selected-tab');
  },[]);

  useEffect(() => {
    console.log('RERENDERR')
    databaseAccess.pullMoviesData(currentQuery, (data) => { setMoviesData(data) });
  },[currentQuery]);

  // Render app components
  return (
    <div className="app-div">
      <TitleBox />
      <UserInputBox currentQuery = { currentQuery } setCurrentQuery = { setCurrentQuery }/>
      <MovieDisplayBox moviesData = { moviesData } currentQuery = { currentQuery } setCurrentQuery = { setCurrentQuery }/>
    </div>
)};

export default App;