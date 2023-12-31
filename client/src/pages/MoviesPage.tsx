import React, { useState, useEffect } from 'react';
import { DocumentNode, useQuery } from '@apollo/client';

import { MovieList, MoviePagination } from '../components/index';
import { MoviePageContainer } from '../styled/MoviePage';

export interface MoviPagePropsInterface {
  gqlQuery: {
    query: DocumentNode;
    type: string;
  };
  query: string;
}

const MoviePage: React.FC<MoviPagePropsInterface> = (props) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [props.gqlQuery.type]);

  const { loading, error, data } = useQuery(props.gqlQuery.query, {
    variables: {
      language: 'en-US',
      page: page,
      query: props.query,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
  }

  const movies = data ? data[props.gqlQuery.type].movies : [];
  const pages = data
    ? data[props.gqlQuery.type].total_pages > 20
      ? 20
      : data[props.gqlQuery.type].total_pages
    : 0;

  return (
    <MoviePageContainer data-testid="movie-page">
      <MovieList movies={movies || []} />
      {data && movies.length !== 0 ? (
        <MoviePagination
          size="large"
          color="primary"
          page={page}
          pages={pages}
          setPage={setPage}
        />
      ) : (
        <></>
      )}
    </MoviePageContainer>
  );
};

export default MoviePage;
