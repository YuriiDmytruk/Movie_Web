import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material';

import { MovieType } from '../../types';
import { Button } from '@mui/material';

interface MovieCardPropsInterface {
  movie: MovieType;
}

const MovieCard: React.FC<MovieCardPropsInterface> = (props) => {
  return (
    <Card sx={{ Height: 500 }}>
      <CardHeader
        title={props.movie.title}
        subheader={props.movie.release_date}
      />
      <CardMedia
        component="img"
        height="400"
        image={'https://image.tmdb.org/t/p/original' + props.movie.poster_path}
        alt={props.movie.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.movie.overview}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button>Check</Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
