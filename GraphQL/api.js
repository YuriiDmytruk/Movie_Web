const HEADERS = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmZjNDM4MjI2MzI1MGZjMTFhZmFhNzBkZjVmMDUyYiIsInN1YiI6IjY1MTkxMjVlOTNiZDY5MDExYjhlMGUyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K60krMFucV07ayZZgko8rqMo7KtbtSxfj1azIVirVBc',
};

const URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

const fetchPopulatMovies = async () => {
  await fetch(URL, {
    method: 'GET',
    headers: HEADERS,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Data received:', data);
      return data;
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
};

module.exports = fetchPopulatMovies;
