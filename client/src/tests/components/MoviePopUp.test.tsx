import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { MoviePopUp } from '../../components/index';

import { moviesReducer } from '../../redux/ducks/movies';
import { detailMovies } from '../../util/Data/testDataDetailMovies';
import { GET_MOVIE } from '../../apolo/queries';

const store = createStore(moviesReducer, detailMovies);

test('should render MoviePopUp component and match snapshot', async () => {
  const popupMock = [
    {
      request: {
        query: GET_MOVIE,
        variables: {
          language: 'en-US',
          id: undefined,
        },
      },
      result: {
        data: {
          getMovie: {
            id: '1',
            adult: false,
            budget: 0,
            genres: [],
            poster_path: '',
            original_title: 'GET_MOVIE',
            popularity: '',
            overview: '',
            production_companies: [],
            production_countries: [],
            release_date: '',
            runtime: 0,
          },
          total_pages: 1,
        },
      },
    },
  ];

  const { asFragment } = render(
    <MockedProvider mocks={popupMock} addTypename={false}>
      <Provider store={store}>
        <MemoryRouter>
          <MoviePopUp isShow={true} />
        </MemoryRouter>
      </Provider>
    </MockedProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
