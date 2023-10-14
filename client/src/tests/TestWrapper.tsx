import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MockedProvider } from '@apollo/client/testing';
import { DocumentNode } from '@apollo/client';

import { moviesReducer } from '../redux/ducks/movies';
import { MovieDetailsType, MovieType } from '../../types';
import { detailMovies } from '../util/Data/testDataDetailMovies';
import { movies as simpleMovies } from '../util/Data/testDataMovies';
import { GET_POPULAR } from '../apolo/queries';

const TestWrapper: React.FC<{
  TestComponent: React.FC;
  movies?: MovieDetailsType[];
  mocks?: {
    query: DocumentNode;
    variables: {
      language?: string;
      page?: number;
      query?: string;
      id?: number;
    };
    data?: {
      getPopularMovies: {
        movies: MovieType[] | MovieDetailsType[];
        total_pages: number;
      };
    };
  };
}> = ({ TestComponent, movies, mocks }) => {
  const store = createStore(moviesReducer, {
    movies: movies || detailMovies.movies,
  });

  const mocksData = [
    mocks
      ? {
          request: {
            query: mocks.query,
            variables: mocks.variables,
          },
          result: {
            data: mocks.data,
          },
        }
      : {
          request: {
            query: GET_POPULAR,
            variables: {
              language: 'en-US',
              page: 1,
              query: 'string',
            },
          },
          result: {
            data: {
              getPopularMovies: {
                movies: simpleMovies,
                total_pages: 1,
              },
            },
          },
        },
  ];

  return (
    <Provider store={store}>
      <MockedProvider mocks={mocksData} addTypename={false}>
        <MemoryRouter>
          <TestComponent />
        </MemoryRouter>
      </MockedProvider>
    </Provider>
  );
};

export default TestWrapper;
