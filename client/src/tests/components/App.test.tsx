import React from 'react';
import { screen } from '@testing-library/dom';
import { fireEvent, render, waitFor, within } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '../../components/App';

import { mocks } from '../mocks';
import { moviesReducer } from '../../redux/ducks/movies';
import { detailMovies } from '../../util/Data/testDataDetailMovies';

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

const store = createStore(moviesReducer, detailMovies);

test('should render App component and match snapshot', async () => {
  const { asFragment } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    </MockedProvider>
  );

  await waitFor(() => {
    expect(screen.getByTestId('movie-page')).toBeInTheDocument();
  });

  expect(asFragment()).toMatchSnapshot();
});

describe('Test NavBar buttons', () => {
  it('should send request with query GET_POPULAR when NavBar Popular button is clicked', async () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    );

    fireEvent.click(screen.getByTestId('nav-now-playing'));

    await waitFor(() => {
      expect(screen.getByTestId('movie-page')).toBeInTheDocument();
    });

    expect(screen.getByText('GET_NOW_PLAYING')).toBeInTheDocument();
  });

  it('should send request with query GET_NOW_PLAYING when NavBar Now Playing button is clicked', async () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    );

    fireEvent.click(
      within(screen.getByTestId('nav-popular')).getByRole('button')
    );

    await waitFor(() => {
      expect(screen.getByTestId('movie-page')).toBeInTheDocument();
    });

    expect(screen.getByText('GET_POPULAR')).toBeInTheDocument();
  });

  it('should send request with query GET_TOP_RATED when NavBar Top Rated button is clicked', async () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    );

    fireEvent.click(
      within(screen.getByTestId('nav-top-rated')).getByRole('button')
    );

    await waitFor(() => {
      expect(screen.getByTestId('movie-page')).toBeInTheDocument();
    });

    expect(screen.getByText('GET_TOP_RATED')).toBeInTheDocument();
  });

  it('should open StatisticPage when NavBar Statistic button is clicked', async () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    );

    fireEvent.click(
      within(screen.getByTestId('nav-statistic')).getByRole('button')
    );

    await waitFor(() => {
      expect(screen.getByTestId('statistic-page')).toBeInTheDocument();
    });

    expect(screen.getByTestId('statistic-page')).toBeInTheDocument();
  });

  it('should open ChartPage when NavBar Chart button is clicked', async () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    );

    fireEvent.click(
      within(screen.getByTestId('nav-chart')).getByRole('button')
    );

    await waitFor(() => {
      expect(screen.getByTestId('chart-page')).toBeInTheDocument();
    });

    expect(screen.getByTestId('chart-page')).toBeInTheDocument();
  });

  it('should send request with query SEARCH_MOVIE when NavBar Serch button is clicked', async () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    );

    fireEvent.click(
      within(screen.getByTestId('nav-search')).getByRole('button')
    );

    await waitFor(() => {
      expect(screen.getByTestId('movie-page')).toBeInTheDocument();
    });

    expect(screen.getByText('SEARCH_MOVIE')).toBeInTheDocument();
  });
});

describe('Test button in MovieCard', () => {
  it('should open popup when check button in MovieCard is clicked', async () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={store}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </Provider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('movie-page')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('card-check'));

    await waitFor(() => {
      expect(screen.getByTestId('popup')).toBeInTheDocument();
    });
  });
});
