import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { MovieCard } from '../components/index';

import { store } from '../redux/store';

const meta = {
  title: 'MoviePage/MovieCard',
  component: MovieCard,
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

type MovieCardProps = {
  movie: {
    adult: boolean;
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
  };
};

export const Standart: StoryObj<MovieCardProps> = (args: any) => (
  <MovieCard {...args} />
);

Standart.args = {
  movie: {
    adult: false,
    id: 0,
    overview:
      'Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends protector by taking on the mafia.',
    poster_path: '/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg',
    release_date: '2023-08-30',
    title: 'The Equalizer 3',
  },
};
