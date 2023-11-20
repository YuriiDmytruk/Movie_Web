import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import MoviePage from '../pages/MoviesPage';
import { MoviePopUp, NavBar } from './index';
import MovieChartPage from '../pages/MovieChartPage';
import MovieStatisticsPage from '../pages/MovieStatisticsPage';

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
        <Route path="/statistic" element={<MovieStatisticsPage />} />
        <Route path="/chart" element={<MovieChartPage />} />
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
