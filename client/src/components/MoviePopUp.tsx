import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Modal, ModalDialog, ModalClose } from '@mui/joy';
import { useQuery } from '@apollo/client';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
  ButtonGroup,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { MoviePopUpColumns, ButtonToTheRight } from '../styled/MoviePopUp';

import { GET_MOVIE } from '../apolo/queries';
import { addMovie, deleteMovie } from '../redux/ducks/movies';
import { MovieStateType } from '../../types';

const IMAGE_PASS: string = 'https://image.tmdb.org/t/p/original';

const MoviePopUp: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isNotInStatistic =
    useSelector((state: MovieStateType) => state.movies).filter(
      (movie) => parseInt(movie.id) === parseInt(id!)
    ).length > 0;

  useEffect(() => {
    if (id !== undefined) {
      setShow(true);
    }
  }, [location, id]);

  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: {
      language: 'en-US',
      id: id,
    },
  });

  const handleClose = () => {
    setShow(false);
    navigate('/');
  };

  if (loading)
    return (
      <Modal open={show} onClose={handleClose}>
        <ModalDialog
          color="danger"
          layout="center"
          size="lg"
          variant="outlined"
        >
          <ModalClose />
          <Typography>Loading...</Typography>
        </ModalDialog>
      </Modal>
    );
  if (error) {
    console.error(error);
  }
  console.log(data);
  const movie = data.getMovie || {};

  const onAddToStatisticsClick = () => dispatch(addMovie(movie));

  const onDeleteFromStatisticsClick = () => dispatch(deleteMovie(movie.id));

  const formatRuntime = (minutes: number) =>
    `${Math.floor(minutes / 60)}.${minutes % 60}`;

  return (
    <Modal open={show} onClose={handleClose} data-testid="popup">
      <ModalDialog color="success" layout="center" size="lg" variant="outlined">
        <ModalClose />

        <Card>
          <MoviePopUpColumns>
            <CardMedia
              component="img"
              height="400"
              image={IMAGE_PASS + movie.poster_path}
              alt={movie.original_title}
            />
            <div>
              <CardHeader
                title={movie.original_title}
                subheader={movie.release_date}
              />
              <CardContent>
                <Typography variant="body2">
                  Overview:<span>{movie.overview}</span>
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2">
                  Popularity: {movie.popularity}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2">
                  Companies:{' '}
                  {movie.production_companies
                    .map(
                      (company: { __typename: string; name: string }) =>
                        company.name
                    )
                    .join(',')}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2">
                  Countries:{' '}
                  {movie.production_countries
                    .map(
                      (country: { __typename: string; name: string }) =>
                        country.name
                    )
                    .join(',')}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2">
                  Run time: {formatRuntime(movie.runtime)}
                </Typography>
              </CardContent>
              <Box sx={{ flexGrow: 1 }} />
              <CardActions disableSpacing>
                <ButtonToTheRight>
                  <ButtonGroup variant="text" aria-label="text button group">
                    <Button
                      data-testid="popup-add"
                      disabled={isNotInStatistic}
                      onClick={onAddToStatisticsClick}
                    >
                      Add to statistics
                    </Button>
                    <Button
                      data-testid="popup-delete"
                      disabled={!isNotInStatistic}
                      color="error"
                      onClick={onDeleteFromStatisticsClick}
                    >
                      Delete from statistics
                    </Button>
                    <Button color="error" onClick={handleClose}>
                      Close
                    </Button>
                  </ButtonGroup>
                </ButtonToTheRight>
              </CardActions>
            </div>
          </MoviePopUpColumns>
        </Card>
      </ModalDialog>
    </Modal>
  );
};

export default MoviePopUp;
