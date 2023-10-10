import React from 'react';
import { useSelector } from 'react-redux';

import { MovieStateType } from '../../types';

const MovieStatistics: React.FC = () => {
  const Movies = useSelector((state: MovieStateType) => state.movies);
  console.log(Movies);
  return <div>Statistics</div>;
};

export default MovieStatistics;
