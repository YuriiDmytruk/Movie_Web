import type { Meta, StoryObj } from '@storybook/react';

import MoviePagination, {
  MoviePaginationInterfce,
} from '../components/MoviePagination';

const meta = {
  title: 'MoviePage/MoviePagination',
  component: MoviePagination,
  decorators: [(Story) => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta;

export default meta;

export const Standart: StoryObj = (args: MoviePaginationInterfce) => (
  <MoviePagination {...args} />
);

Standart.args = {
  setPage: () => {},
  pages: 20,
  page: 1,
};
