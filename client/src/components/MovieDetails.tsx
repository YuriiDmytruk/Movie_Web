import React from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_MOVIE } from '../apolo/queries';

const MovieDetails = () => {
  const { loading, error, data } = useQuery(SEARCH_MOVIE, {
    variables: {
      query: 'Top',
      language: 'en-US',
      page: 1,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error: {error.message}</p>;
  }

  console.log({ ...data });
  return <div>done</div>;
};

export default MovieDetails;
