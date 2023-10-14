import React from 'react';
import { screen } from '@testing-library/dom';
import { fireEvent, render, waitFor, within } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import 'resize-observer-polyfill';

import App from '../../components/App';

import TestWrapper from '../TestWrapper';
import { movies } from '../../util/Data/testDataMovies';
import {
  GET_NOW_PLAYING,
  GET_POPULAR,
  GET_TOP_RATED,
  SEARCH_MOVIE,
} from '../../apolo/queries';

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

test('should render App component and match snapshot', async () => {
  const mocks = [
    {
      request: {
        query: GET_NOW_PLAYING,
        variables: {
          language: 'en-US',
          page: 1,
          query: '',
        },
      },
      result: {
        data: {
          getNowPlayingMovies: {
            movies: movies.movies,
            total_pages: 1,
          },
        },
      },
    },
  ];

  const testWrapperArgs = {
    TestComponent: App,
  };

  const { asFragment } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <TestWrapper {...testWrapperArgs} />
    </MockedProvider>
  );

  await waitFor(() => {
    expect(screen.getByTestId('movie-page')).toBeInTheDocument();
  });

  expect(asFragment()).toMatchSnapshot();
});

const mocks = [
  {
    request: {
      query: GET_NOW_PLAYING,
      variables: {
        language: 'en-US',
        page: 1,
        query: '',
      },
    },
    result: {
      data: {
        getNowPlayingMovies: {
          movies: [
            {
              id: '1',
              adult: false,
              poster_path: '/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg',
              title: 'GET_NOW_PLAYING',
              overview:
                'Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.',
              release_date: '2023-09-13',
            },
          ],
          total_pages: 1,
        },
      },
    },
  },
  {
    request: {
      query: GET_POPULAR,
      variables: {
        language: 'en-US',
        page: 1,
        query: '',
      },
    },
    result: {
      data: {
        getPopularMovies: {
          movies: [
            {
              id: '1',
              adult: false,
              poster_path: '/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg',
              title: 'GET_POPULAR',
              overview:
                'Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.',
              release_date: '2023-09-13',
            },
          ],
          total_pages: 1,
        },
      },
    },
  },
  {
    request: {
      query: GET_TOP_RATED,
      variables: {
        language: 'en-US',
        page: 1,
        query: '',
      },
    },
    result: {
      data: {
        getTopRatedMovies: {
          movies: [
            {
              id: '1',
              adult: false,
              poster_path: '/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg',
              title: 'GET_TOP_RATED',
              overview:
                'Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.',
              release_date: '2023-09-13',
            },
          ],
          total_pages: 1,
        },
      },
    },
  },
  {
    request: {
      query: SEARCH_MOVIE,
      variables: {
        language: 'en-US',
        page: 1,
        query: '',
      },
    },
    result: {
      data: {
        getSearchedMovie: {
          movies: [
            {
              id: '1',
              adult: false,
              poster_path: '/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg',
              title: 'SEARCH_MOVIE',
              overview:
                'Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.',
              release_date: '2023-09-13',
            },
          ],
          total_pages: 1,
        },
      },
    },
  },
];

describe('Test NavBar buttons', () => {
  it('should send request with query GET_POPULAR when NavBar Popular button is clicked', async () => {
    const testWrapperArgs = {
      TestComponent: App,
    };

    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TestWrapper {...testWrapperArgs} />
      </MockedProvider>
    );

    fireEvent.click(screen.getByTestId('nav-now-playing'));

    await waitFor(() => {
      expect(screen.getByTestId('movie-page')).toBeInTheDocument();
    });

    expect(screen.getByText('GET_NOW_PLAYING')).toBeInTheDocument();
  });

  it('should send request with query GET_NOW_PLAYING when NavBar Now Playing button is clicked', async () => {
    const testWrapperArgs = {
      TestComponent: App,
    };

    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TestWrapper {...testWrapperArgs} />
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
    const testWrapperArgs = {
      TestComponent: App,
    };

    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TestWrapper {...testWrapperArgs} />
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
    const testWrapperArgs = {
      TestComponent: App,
    };

    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TestWrapper {...testWrapperArgs} />
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
    const testWrapperArgs = {
      TestComponent: App,
    };

    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TestWrapper {...testWrapperArgs} />
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
    const testWrapperArgs = {
      TestComponent: App,
    };

    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <TestWrapper {...testWrapperArgs} />
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
