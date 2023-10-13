import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { MockedProvider } from '@apollo/client/testing';

import { NavBar } from '../components/index';
import { NavBarPropsInterfce } from '../components/NavBar';

import { DocumentNode } from '@apollo/client';
import { moviesReducer } from '../redux/ducks/movies';
import { movies } from './testDataMovies';
import { detailMovies } from './testDataDetailMovies';
import { GET_NOW_PLAYING } from '../apolo/queries';

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

const store = createStore(moviesReducer, detailMovies);

const meta = {
  title: 'MoviePage/NavBar',
  component: NavBar,
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

export const Standart: StoryObj = (args: NavBarPropsInterfce) => (
  <NavBar {...args} />
);

Standart.args = {
  setQuery: (query: string) => {},
  setgqlQuery: (queryObject: { query: DocumentNode; type: string }) => {},
};
