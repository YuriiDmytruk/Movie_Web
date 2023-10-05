import React, { useState } from 'react';
import { DocumentNode, useQuery } from '@apollo/client';

import { MoviesList, MoviePagination } from '../components/index';
import { MoviePageContainer } from '../styled/MoviePage';

interface MoviPagePropsInterface {
  gqlQuery: {
    query: DocumentNode;
    type: string;
  };
  query: string;
}

const MoviePage: React.FC<MoviPagePropsInterface> = (props) => {
  const [page, setPage] = useState(1);

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
  console.log(data);
  const movies = data ? data[props.gqlQuery.type] : [];
  return (
    <MoviePageContainer>
      <MoviesList movies={movies || []} />
      <MoviePagination page={page} setPage={setPage} />
    </MoviePageContainer>
  );
};

export default MoviePage;
