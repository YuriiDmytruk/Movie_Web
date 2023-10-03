import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query GET_MOVIES {
    getMovies {
      id
      releaseDate
    }
  }
`;
