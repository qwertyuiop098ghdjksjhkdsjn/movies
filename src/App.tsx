import React from 'react';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Search from './components/Search/Search';
import SearchList from './components/SearchList/SearchList';
import {Route, Routes } from 'react-router-dom';
import OneFilmInfo from './components/OneFilmInfo/OneFilmInfo';
import FilmsByGenre from './components/FilmsByGenre/FilmsByGenre';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainPage/>} path='/'/>
        <Route element={<SearchList/>} path='/search/:filmName'/>
        <Route element={<OneFilmInfo/>} path='/oneFilmInfo/:chosenFilm'/>
        <Route element={<FilmsByGenre/>} path='/genre/:chosenGenre'/>
      </Routes>
    </div>
  );
}

export default App;
