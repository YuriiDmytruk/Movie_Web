import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';

import { PaginationStyled } from '../styled/MoviePagination';
import { LargeNumberLike } from 'crypto';

export interface MoviePaginationInterfce {
  setPage: (page: number) => void;
  pages: number;
  page: number;
  color?: 'primary' | 'secondary';
  outlined?: boolean;
  size?: 'small' | 'medium' | 'large';
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
        size={props.size === 'medium' ? undefined : props.size}
        color={props.color}
        variant={props.outlined ? 'outlined' : undefined}
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
