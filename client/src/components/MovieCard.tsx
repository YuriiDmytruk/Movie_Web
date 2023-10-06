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
} from '@mui/material';

import { MovieType } from '../../types';
import { Button } from '@mui/material';

interface MovieCardPropsInterface {
  movie: MovieType;
}
const MAX_OVERVIE_LENGHT = 215;
const MAX_TITLE_LENGHT = 23;

const MovieCard: React.FC<MovieCardPropsInterface> = (props) => {
  const cutOverview = (input: string, maxChars: number) =>
    input.length <= maxChars ? input : input.slice(0, maxChars) + '...';

  const cardStyle: React.CSSProperties = {
    height: '700px',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <Card style={cardStyle}>
      <CardHeader
        title={cutOverview(props.movie.title, MAX_TITLE_LENGHT)}
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
