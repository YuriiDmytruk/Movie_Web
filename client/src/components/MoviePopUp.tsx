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
} from '@mui/material';

import { MoviePopUpColumns, ButtonToTheRight } from '../styled/MoviePopUp';

import { GET_MOVIE } from '../apolo/queries';

const MoviePopUp: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();

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
  const movie = data.getMovie;

  const formatRuntime = (minutes: number) =>
    `${Math.floor(minutes / 60)}.${minutes % 60}`;

  return (
    <Modal open={show} onClose={handleClose}>
      <ModalDialog color="success" layout="center" size="lg" variant="outlined">
        <ModalClose />

        <Card>
          <MoviePopUpColumns>
            <CardMedia
              component="img"
              height="400"
              image={'https://image.tmdb.org/t/p/original' + movie.poster_path}
              alt={movie.original_title}
            />
            <div>
              <CardHeader
                title={movie.original_title}
                subheader={movie.release_date}
              />
              <CardContent>
                <Typography variant="body2">
                  Overview:<p>{movie.overview}</p>
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2">
                  Popularity: {movie.popularity}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2">
                  Componies:{' '}
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
                  <Button color="error" onClick={handleClose}>
                    Close
                  </Button>
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
