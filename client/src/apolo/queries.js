import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query GET_MOVIES {
    getPopularMovies {
      adult
      backdrop_path: id
      original_title
      overview
      poster_path
      release_date
      title
    }
  }
`;
