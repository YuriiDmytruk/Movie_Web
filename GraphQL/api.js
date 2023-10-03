const HEADERS = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmZjNDM4MjI2MzI1MGZjMTFhZmFhNzBkZjVmMDUyYiIsInN1YiI6IjY1MTkxMjVlOTNiZDY5MDExYjhlMGUyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K60krMFucV07ayZZgko8rqMo7KtbtSxfj1azIVirVBc',
};

const URL = 'https://api.themoviedb.org/3/movie/';

const CREATE_URL_DEFAULT_PROPS = {
  id: null,
  language: null,
  page: null,
};

const createURL = (props) => {
  let url = URL;
  url = url + (props.id !== null ? props.id : 'popular');
  url += `?language=${props.language}`;
  url = props.page !== null ? url + `&page=${props.page}` : url;
  return url;
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
  CREATE_URL_DEFAULT_PROPS,
  createURL,
};
