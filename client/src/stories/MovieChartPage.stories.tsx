import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import MovieChartPage from '../pages/MovieChartPage';

import { moviesReducer } from '../redux/ducks/movies';
import { detailMovies } from '../util/Data/testDataDetailMovies';

const store = createStore(moviesReducer, detailMovies);

const meta = {
  title: 'MovieChartPage',
  component: MovieChartPage,
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

export const Standart: StoryObj = () => <MovieChartPage />;

Standart.args = {};
