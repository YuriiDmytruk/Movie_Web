import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';

import { PaginationStyled } from '../styled/MoviePagination';

interface MoviePaginationInterfce {
  setPage: (page: number) => void;
  pages: number;
  page: number;
}

const MoviePagination: React.FC<MoviePaginationInterfce> = (props) => {
  const [page, setPage] = useState(props.page);

  const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    props.setPage(value);
  };

  return (
    <PaginationStyled>
      <Pagination
        size="large"
        color="primary"
        count={props.pages}
        page={page}
        onChange={onPageChange}
        showFirstButton
        showLastButton
      />
    </PaginationStyled>
  );
};

export default MoviePagination;
