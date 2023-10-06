export type MovieType = {
  adult: boolean,
  id: number,
  overview: string,
  poster_path: string,
  release_date: string,
  title: string,
}

export type MovieDetailsType = {
  id: number,
      adult: boolean,
      budget: number,
      genres: {
        id: number,
        name: string,
      }
      poster_path: string,
      original_title: string,
      popularity: string,
      overview: string,
      production_companies: {
        name: [string],
      },
      production_countries: {
        name: [string],
      },
      release_date: string,
      runtime: number,
}

export type MovieStateType = {
  movies: MovieDetailsType[]
}

export type deleteMovieType = {
  type: string,
  id: number,
}

export type addMovieType = {
  type: string,
  movie: MovieDetailsType,
}
