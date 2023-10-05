import React from 'react';
import { DocumentNode, useQuery } from '@apollo/client';

import { MoviesList } from '../components/index';
import { MoviePageContainer } from '../styled/MoviePage';

interface MoviPagePropsInterface {
  gqlQuery: {
    query: DocumentNode;
    type: string;
  };
  query: string;
}

const MoviePage: React.FC<MoviPagePropsInterface> = (props) => {
  const { loading, error, data } = useQuery(props.gqlQuery.query, {
    variables: {
      language: 'en-US',
      page: 1,
      query: props.query,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
  }

  const movies = data[props.gqlQuery.type];

  console.log({ ...data });
  return (
    <MoviePageContainer>
      <MoviesList movies={movies || []} />
    </MoviePageContainer>
  );
};

export default MoviePage;
