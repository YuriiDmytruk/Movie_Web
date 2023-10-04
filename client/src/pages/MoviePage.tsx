import React from 'react';
import { useQuery } from '@apollo/client';

import { MoviesList } from '../components/index';
import { MoviePageContainer } from '../styled/MoviePage';

import { GET_MOVIES } from '../apolo/queries';

interface MoviPagePropsInterface {
  query: string;
}

const MoviePage: React.FC<MoviPagePropsInterface> = (props) => {
  const { loading, error, data } = useQuery(GET_MOVIES, {
    variables: {
      language: 'en-US',
      page: 1,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
  }

  console.log({ ...data });
  return (
    <MoviePageContainer>
      <MoviesList movies={data.getPopularMovies || []} />
    </MoviePageContainer>
  );
};

export default MoviePage;
