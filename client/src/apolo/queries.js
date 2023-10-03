import { gql } from '@apollo/client';

export const GET_MOVIES = gql`
  query GET_MOVIES($page: Int!, $language: String!) {
    getPopularMovies(page: $page, language: $language) {
      adult
      backdrop_path
      id
      original_title
      overview
      poster_path
      release_date
      title
    }
  }
`;

export const GET_MOVIE = gql`
  query GET_MOVIE($id: ID!, $language: String!) {
    getMovie(id: $id, language: $language) {
      id
      budget
      genres {
        id
        name
      }
      original_language
      original_title
      popularity
      overview
    }
  }
`;
export const SEARCH_MOVIE = gql`
  query ExampleQuery($query: String!, $language: String!, $page: Int!) {
    getSearchedMovie(query: $query, language: $language, page: $page) {
      adult
      id
      original_title
      backdrop_path
      poster_path
      overview
      release_date
      title
    }
  }
`;
