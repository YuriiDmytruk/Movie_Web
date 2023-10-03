import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MOVIES } from '../apolo/queries';

const MovieDetails = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error: {error.message}</p>;
  }

  console.log({ ...data });
  return <div>done</div>;
};

export default MovieDetails;
