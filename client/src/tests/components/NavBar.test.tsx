import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { NavBar } from '../../components/index';

import { mocks } from '../mocks';
import { moviesReducer } from '../../redux/ducks/movies';
import { detailMovies } from '../../util/Data/testDataDetailMovies';

const store = createStore(moviesReducer, detailMovies);

test('should render App component and match snapshot', async () => {
  const { asFragment } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Provider store={store}>
        <MemoryRouter>
          <NavBar setQuery={() => {}} setgqlQuery={() => {}} />
        </MemoryRouter>
      </Provider>
    </MockedProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
