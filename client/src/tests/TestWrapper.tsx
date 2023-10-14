import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { moviesReducer } from '../redux/ducks/movies';
import { MovieDetailsType } from '../../types';
import { detailMovies } from '../util/Data/testDataDetailMovies';
import React from 'react';

const TestWrapper: React.FC<{
  TestComponent: React.FC;
  movies?: MovieDetailsType[];
}> = ({ TestComponent, movies }) => {
  const store = createStore(moviesReducer, {
    movies: movies || detailMovies.movies,
  });

  return (
    <Provider store={store}>
      <MemoryRouter>
        <TestComponent />
      </MemoryRouter>
    </Provider>
  );
};

export default TestWrapper;
