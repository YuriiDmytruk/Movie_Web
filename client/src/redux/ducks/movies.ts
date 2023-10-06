import { MovieStateType, MovieDetailsType,deleteMovieType, addMovieType } from '../../../types';

export const ADD_MOVIE = 'ADD_JOKES';
export const DELETE_MOVIE = 'DELETE_JOKE'

const defaultState: MovieStateType = {
  movies: JSON.parse(localStorage.getItem('MOVIES') || '[]')
};

export const moviesReducer = (
  state: MovieStateType = defaultState,
  action: any
): MovieStateType => {
  switch (action.type) {
      case ADD_MOVIE:
          const updatedAddState = { ...state, movies: [...state.movies, action.movie] };
          localStorage.setItem('MOVIES', JSON.stringify(updatedAddState.movies))
      return updatedAddState
      case DELETE_MOVIE:
          const updatedDeleteState = { ...state, movies: state.movies.filter((movie: MovieDetailsType)  => movie.id !== action.id) };
          localStorage.setItem('MOVIES',JSON.stringify(updatedDeleteState.movies))
      return updatedDeleteState
    default:
      return state;
  }
};

export const deleteMovie = (id: number = -1): deleteMovieType => {
  return {type: DELETE_MOVIE, id: id}
}

export const addMovie = (movie: MovieDetailsType): addMovieType => {
  return { type: ADD_MOVIE, movie: movie };
}
