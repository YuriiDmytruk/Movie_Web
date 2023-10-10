import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
} from '@mui/material';

import { cardStyle } from '../styled/MovieCard';
import { MovieType } from '../../types';

interface MovieCardPropsInterface {
  movie: MovieType;
}
const MAX_OVERVIE_LENGHT: number = 215;
const MAX_TITLE_LENGHT: number = 23;
const IMAGE_PASS: string = 'https://image.tmdb.org/t/p/original';

const MovieCard: React.FC<MovieCardPropsInterface> = (props) => {
  const cutOverview = (input: string, maxChars: number) =>
    input.length <= maxChars ? input : input.slice(0, maxChars) + '...';

  return (
    <Card style={cardStyle}>
      <CardHeader
        title={cutOverview(props.movie.title, MAX_TITLE_LENGHT)}
        subheader={props.movie.release_date}
      />
      <CardMedia
        component="img"
        height="400"
        image={IMAGE_PASS + props.movie.poster_path}
        alt={props.movie.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {cutOverview(props.movie.overview, MAX_OVERVIE_LENGHT)}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <CardActions disableSpacing>
        <Link to={`/movie/${props.movie.id}`}>
          <Button>Check</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
