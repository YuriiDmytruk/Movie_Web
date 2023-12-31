import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';

import MoviePopUp, { MoviePopUpPropsInterface } from '../components/MoviePopUp';

import { GET_MOVIE } from '../apolo/queries';
import { store } from '../redux/store';
import { detailMovies } from '../util/Data/testDataDetailMovies';

const mocks = [
  {
    request: {
      query: GET_MOVIE,
      variables: {
        language: 'en-US',
        id: undefined,
      },
    },
    result: {
      data: {
        getMovie: detailMovies.movies[0],
      },
    },
  },
];

const meta = {
  title: 'MoviePage/MoviePopUp',
  component: MoviePopUp,
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

export const Standart: StoryObj = (args: MoviePopUpPropsInterface) => (
  <MoviePopUp {...args} />
);

Standart.args = {
  isShow: true,
};
