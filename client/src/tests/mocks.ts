import {
  GET_NOW_PLAYING,
  GET_POPULAR,
  GET_TOP_RATED,
  SEARCH_MOVIE,
  GET_MOVIE,
} from '../apolo/queries';

export const mocks = [
  {
    request: {
      query: GET_NOW_PLAYING,
      variables: {
        language: 'en-US',
        page: 1,
        query: '',
      },
    },
    result: {
      data: {
        getNowPlayingMovies: {
          movies: [
            {
              id: '1',
              adult: false,
              poster_path: '/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg',
              title: 'GET_NOW_PLAYING',
              overview:
                'Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.',
              release_date: '2023-09-13',
            },
          ],
          total_pages: 1,
        },
      },
    },
  },
  {
    request: {
      query: GET_POPULAR,
      variables: {
        language: 'en-US',
        page: 1,
        query: '',
      },
    },
    result: {
      data: {
        getPopularMovies: {
          movies: [
            {
              id: '1',
              adult: false,
              poster_path: '/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg',
              title: 'GET_POPULAR',
              overview:
                'Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.',
              release_date: '2023-09-13',
            },
          ],
          total_pages: 1,
        },
      },
    },
  },
  {
    request: {
      query: GET_TOP_RATED,
      variables: {
        language: 'en-US',
        page: 1,
        query: '',
      },
    },
    result: {
      data: {
        getTopRatedMovies: {
          movies: [
            {
              id: '1',
              adult: false,
              poster_path: '/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg',
              title: 'GET_TOP_RATED',
              overview:
                'Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.',
              release_date: '2023-09-13',
            },
          ],
          total_pages: 1,
        },
      },
    },
  },
  {
    request: {
      query: SEARCH_MOVIE,
      variables: {
        language: 'en-US',
        page: 1,
        query: '',
      },
    },
    result: {
      data: {
        getSearchedMovie: {
          movies: [
            {
              id: '1',
              adult: false,
              poster_path: '/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg',
              title: 'SEARCH_MOVIE',
              overview:
                'Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.',
              release_date: '2023-09-13',
            },
          ],
          total_pages: 1,
        },
      },
    },
  },
  {
    request: {
      query: GET_MOVIE,
      variables: {
        language: 'en-US',
        id: '1',
      },
    },
    result: {
      data: {
        getMovie: {
          id: '1',
          adult: false,
          budget: 0,
          genres: [],
          poster_path: '',
          original_title: 'GET_MOVIE',
          popularity: '',
          overview: '',
          production_companies: [],
          production_countries: [],
          release_date: '',
          runtime: 0,
        },
        total_pages: 1,
      },
    },
  },
];
