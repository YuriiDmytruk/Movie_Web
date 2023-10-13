import type { Meta, StoryObj } from '@storybook/react';

import MoviesList, { MovieListPropsInterface } from '../components/MovieList';

import { movies } from './testDataMovies';

const meta = {
  title: 'MoviePage/MoviesList',
  component: MoviesList,
  decorators: [(Story) => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta;

export default meta;

export const Popular: StoryObj = (args: MovieListPropsInterface) => (
  <MoviesList {...args} />
);

Popular.args = {
  movies: movies.movies,
};
