import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  fireEvent,
  prettyDOM,
  render,
  waitFor,
  within,
} from '@testing-library/react';
import { screen } from '@testing-library/dom';

import MovieChartPage from '../../pages/MovieChartPage';

import { mocks } from '../mocks';
import { moviesReducer } from '../../redux/ducks/movies';
import { detailMovies } from '../../util/Data/testDataDetailMovies';

const store = createStore(moviesReducer, detailMovies);

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

test('should render MovieChartPage component and match snapshot', async () => {
  const { asFragment } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Provider store={store}>
        <MemoryRouter>
          <MovieChartPage />
        </MemoryRouter>
      </Provider>
    </MockedProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});

describe('Test button in MovieChartPage', () => {
  it('should show pie chart after button Pie click', async () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>
          <MemoryRouter>
            <MovieChartPage />
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    );

    fireEvent.click(screen.getByTestId('chart-page-button-pie'));

    await waitFor(() => {
      expect(screen.getByTestId('chart-page-pie')).toBeInTheDocument();
    });
  });

  it('should show pie chart after button Pie click', async () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>
          <MemoryRouter>
            <MovieChartPage />
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    );

    fireEvent.click(screen.getByTestId('chart-page-button-pie'));

    await waitFor(() => {
      expect(screen.getByTestId('chart-page-pie')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('chart-page-button-bar'));

    await waitFor(() => {
      expect(screen.getByTestId('chart-page-bar')).toBeInTheDocument();
    });
  });
});
