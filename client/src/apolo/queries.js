import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query GET_MOVIES {
    getPopularMovies {
      id
      releaseDate
    }
  }
`;
