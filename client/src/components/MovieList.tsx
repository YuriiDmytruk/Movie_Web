import React from 'react';
import Grid from '@mui/material/Grid';

import { MovieCard } from './index';

import { MovieType } from '../../types';

export interface MovieListPropsInterface {
  movies: [MovieType];
}

const MovieList: React.FC<MovieListPropsInterface> = (props) => {
  return (
    <Grid container spacing={3}>
      {props.movies.map((movie) => (
        <Grid item xs={12} sm={6} md={3} lg={3} key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
