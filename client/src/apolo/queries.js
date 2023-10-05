import { gql } from '@apollo/client';

export const GET_POPULAR_TYPE = 'getPopularMovies';
export const GET_POPULAR = gql`
  query GET_POPULAR($page: Int!, $language: String!) {
    getPopularMovies(page: $page, language: $language) {
      adult
      id
      overview
      poster_path
      release_date
      title
      total_pages
    }
  }
`;

export const GET_TOP_RATED_TYPE = 'getTopRatedMovies';
export const GET_TOP_RATED = gql`
  query GET_TOP_RATED($page: Int!, $language: String!) {
    getTopRatedMovies(page: $page, language: $language) {
      adult
      id
      overview
      poster_path
      release_date
      title
    }
  }
`;

export const GET_NOW_PLAYING_TYPE = 'getNowPlayingMovies';
export const GET_NOW_PLAYING = gql`
  query GET_NOW_PLAYING($page: Int!, $language: String!) {
    getNowPlayingMovies(page: $page, language: $language) {
      adult
      id
      overview
      poster_path
      release_date
      title
    }
  }
`;

export const GET_MOVIE_TYPE = 'getMovie';
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

export const SEARCH_MOVIE_TYPE = 'getSearchedMovie';
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
