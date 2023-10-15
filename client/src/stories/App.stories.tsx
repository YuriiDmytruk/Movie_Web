import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { MockedProvider } from '@apollo/client/testing';

import App from '../components/App';

import { moviesReducer } from '../redux/ducks/movies';
import { movies } from '../util/Data/testDataMovies';
import { detailMovies } from '../util/Data/testDataDetailMovies';
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
  title: 'App',
  component: App,
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

export const Standart: StoryObj = () => <App />;

Standart.args = {};
