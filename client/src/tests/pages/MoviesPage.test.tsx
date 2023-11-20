import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';

import MoviesPage from '../../pages/MoviesPage';

import { mocks } from '../mocks';
import { moviesReducer } from '../../redux/ducks/movies';
import { detailMovies } from '../../util/Data/testDataDetailMovies';
import { GET_NOW_PLAYING } from '../../apolo/queries';

const store = createStore(moviesReducer, detailMovies);

test('should render MoviesPage component and match snapshot', async () => {
  const args = {
    gqlQuery: {
      query: GET_NOW_PLAYING,
      type: 'getNowPlayingMovies',
    },
    query: '',
  };

  const { asFragment } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Provider store={store}>
        <MemoryRouter>
          <MoviesPage {...args} />
        </MemoryRouter>
      </Provider>
    </MockedProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
