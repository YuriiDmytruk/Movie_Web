import React, { useState } from 'react';

import Pagination from '@mui/material/Pagination';

interface MoviePaginationInterfce {
  setPage: (page: number) => void;
  page: number;
}

const MoviePagination: React.FC<MoviePaginationInterfce> = (props) => {
  const [page, setPage] = useState(1);

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    props.setPage(value);
  };

  return <Pagination count={10} page={page} onChange={onPageChange} />;
};

export default MoviePagination;
