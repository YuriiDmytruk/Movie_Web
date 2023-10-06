const HEADERS = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmZjNDM4MjI2MzI1MGZjMTFhZmFhNzBkZjVmMDUyYiIsInN1YiI6IjY1MTkxMjVlOTNiZDY5MDExYjhlMGUyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K60krMFucV07ayZZgko8rqMo7KtbtSxfj1azIVirVBc',
};
const URL = 'https://api.themoviedb.org/3/';

const GET_POPULAR = 'GET_POPULAR';
const GET_MOVIE = 'GET_MOVIE';
const GET_BY_QUERY = 'GET_BY_QUERY';
const GET_TOP_RATED = 'GET_TOP_RATED';
const GET_NOW_PLAYING = 'GET_NOW_PLAYING';

const createURL = (key, props) => {
  switch (key) {
    case GET_POPULAR:
      return `${URL}movie/popular?language=${props.language}&page=${props.page}`;
    case GET_TOP_RATED:
      return `${URL}movie/top_rated?language=${props.language}&page=${props.page}`;
    case GET_NOW_PLAYING:
      return `${URL}movie/now_playing?language=${props.language}&page=${props.page}`;
    case GET_MOVIE:
      return `${URL}movie/${props.id}?language=${props.language}`;
    case GET_BY_QUERY:
      return `${URL}search/movie?query=${props.query}&include_adult=true&language=${props.language}&page=${props.page}`;
    default:
      console.log('No such key in createURL');
  }
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

module.exports = {
  fetchData,
  createURL,
  GET_POPULAR,
  GET_MOVIE,
  GET_BY_QUERY,
  GET_TOP_RATED,
  GET_NOW_PLAYING,
};
