import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import MovieStatisticsPage from '../pages/MovieStatisticsPage';

import { moviesReducer } from '../redux/ducks/movies';
import { detailMovies } from './testDataDetailMovies';

const store = createStore(moviesReducer, detailMovies);

const meta = {
  title: 'MovieStatisticsPage',
  component: MovieStatisticsPage,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
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

export const Standart: StoryObj = () => <MovieStatisticsPage />;

Standart.args = {};
