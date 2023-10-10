import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { moviesReducer } from './ducks/movies';
import { MovieDetailsType } from '../../types';

export const store: Store<MovieDetailsType> = createStore(
  moviesReducer,
  composeWithDevTools()
);
