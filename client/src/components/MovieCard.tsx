import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
} from '@mui/material';

import { MovieType } from '../../types';
import { Button } from '@mui/material';

interface MovieCardPropsInterface {
  movie: MovieType;
}
const MAX_LENGHT = 215;

const MovieCard: React.FC<MovieCardPropsInterface> = (props) => {
  const cutOverview = (input: string) =>
    input.length <= MAX_LENGHT ? input : input.slice(0, MAX_LENGHT) + '...';

  const cardStyle: React.CSSProperties = {
    height: '700px',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <Card style={cardStyle}>
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
          {cutOverview(props.movie.overview)}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <CardActions disableSpacing>
        <Button>Check</Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
