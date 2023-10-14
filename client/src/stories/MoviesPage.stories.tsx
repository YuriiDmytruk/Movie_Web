import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { MockedProvider } from '@apollo/client/testing';

import MoviesPage, { MoviPagePropsInterface } from '../pages/MoviesPage';

import { moviesReducer } from '../redux/ducks/movies';
import { movies } from '../util/Data/testDataMovies';
import { detailMovies } from '../util/Data/testDataDetailMovies';
import { GET_POPULAR, GET_POPULAR_TYPE } from '../apolo/queries';

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
  title: 'MoviesPage',
  component: MoviesPage,
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

export const Standart: StoryObj = (args: MoviPagePropsInterface) => (
  <MoviesPage {...args} />
);

Standart.args = {
  gqlQuery: {
    query: GET_POPULAR,
    type: GET_POPULAR_TYPE,
  },
  query: 'string',
};
