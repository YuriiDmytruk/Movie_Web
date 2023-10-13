import type { Meta, StoryObj } from '@storybook/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';

import { MovieList } from '../components/index';
import { MovieListPropsInterface } from '../components/MovieList';

import { moviesReducer } from '../redux/ducks/movies';
import { movies } from './testDataMovies';
import { detailMovies } from './testDataDetailMovies';
import { GET_POPULAR } from '../apolo/queries';

const mocks = [
  {
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
          movies: movies.movies,
          total_pages: 1,
        },
      },
    },
  },
];

const store = createStore(moviesReducer, detailMovies);

const meta = {
  title: 'MoviePage/MovieList',
  component: MovieList,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </MockedProvider>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta;

export default meta;

export const Standart: StoryObj = (args: MovieListPropsInterface) => (
  <MovieList {...args} />
);

Standart.args = {
  movies: movies.movies,
};
