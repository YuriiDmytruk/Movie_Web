import React, { useState } from 'react';

import MoviePage from '../pages/MoviePage';
import { NavBar } from './index';

const App = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <NavBar setQuery={setQuery} />
      <MoviePage query={query} />
    </>
  );
};

export default App;
