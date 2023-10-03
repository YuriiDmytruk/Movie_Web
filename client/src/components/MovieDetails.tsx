import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MOVIE } from '../apolo/queries';

const MovieDetails = () => {
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: 980489, language: 'en-US' },
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
