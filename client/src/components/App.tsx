import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import MoviePage from '../pages/MoviesPage';
import { MovieChart, MoviePopUp, MovieStatistics, NavBar } from './index';

import { GET_NOW_PLAYING, GET_NOW_PLAYING_TYPE } from '../apolo/queries';

const App = () => {
  const [query, setQuery] = useState('');
  const [gqlQuery, setgqlQuery] = useState({
    query: GET_NOW_PLAYING,
    type: GET_NOW_PLAYING_TYPE,
  });

  return (
    <>
      <NavBar setgqlQuery={setgqlQuery} setQuery={setQuery} />
      <Routes>
        <Route
          path="/"
          element={<MoviePage gqlQuery={gqlQuery} query={query} />}
        />
        <Route path="/statistic" element={<MovieStatistics />} />
        <Route path="/chart" element={<MovieChart />} />
        <Route
          path="/movie/:id"
          element={
            <>
              <MoviePage gqlQuery={gqlQuery} query={query} />
              <MoviePopUp />
            </>
          }
        />
        <Route
          path="*"
          element={<MoviePage gqlQuery={gqlQuery} query={query} />}
        />
      </Routes>
    </>
  );
};

export default App;
