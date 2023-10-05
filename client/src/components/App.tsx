import React, { useState } from 'react';

import MoviePage from '../pages/MoviesPage';
import { NavBar } from './index';

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
      <MoviePage gqlQuery={gqlQuery} query={query} />
    </>
  );
};

export default App;
