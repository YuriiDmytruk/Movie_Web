import type { Meta, StoryObj } from '@storybook/react';

import { MovieCard } from '../components/index';

const meta = {
  title: 'MoviePage/MovieCard',
  component: MovieCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    
  },
} satisfies Meta<typeof MovieCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    movie: {
        adult: false,
        id: 0,
        overview: 'Some Overview',
        poster_path: '',
        release_date: '10.10.20',
        title: 'SomeTitle',
    }
  },
};
