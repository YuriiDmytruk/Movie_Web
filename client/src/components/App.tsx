import React, { useState } from 'react';

import MoviePage from '../pages/MoviePage';
import { NavBar } from './index';

import { GET_POPULAR, GET_POPULAR_TYPE } from '../apolo/queries';

const App = () => {
  const [query, setQuery] = useState('');
  const [gqlQuery, setgqlQuery] = useState({
    query: GET_POPULAR,
    type: GET_POPULAR_TYPE,
  });

  return (
    <>
      <NavBar setgqlQuery={setgqlQuery} setQuery={setQuery} />
      <MoviePage gqlQuery={gqlQuery} query={query} />
    </>
  );
};

export default App;
