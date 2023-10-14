import React from 'react';
import { screen } from '@testing-library/dom';
import { render, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';

import App from '../../components/App';

import TestWrapper from '../TestWrapper';
import { movies } from '../../util/Data/testDataMovies';
import { GET_NOW_PLAYING } from '../../apolo/queries';

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

test('should render App component and match snapshot', async () => {
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
