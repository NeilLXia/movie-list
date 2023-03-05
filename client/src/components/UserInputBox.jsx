import React from 'react';
import MovieAdder from './UserInputBox/MovieAdder.jsx';
import SearchBar from './UserInputBox/SearchBar.jsx';

const UserInputBox = ({currentQuery, setCurrentQuery}) => (
  <div className="userinput-box">
    <MovieAdder currentQuery = {currentQuery} setCurrentQuery = {setCurrentQuery}/>
    <SearchBar currentQuery = {currentQuery} setCurrentQuery = {setCurrentQuery}/>
  </div>
);

export default UserInputBox;