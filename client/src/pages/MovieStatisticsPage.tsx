import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import {
  SelectionState,
  PagingState,
  IntegratedPaging,
  IntegratedSelection,
  IntegratedSorting,
  SortingState,
  FilteringState,
  IntegratedFiltering,
  SearchState,
  EditingState,
  RowDetailState,
  ChangeSet,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  DragDropProvider,
  TableHeaderRow,
  TableColumnResizing,
  TableSelection,
  PagingPanel,
  TableFilterRow,
  TableRowDetail,
  TableColumnReordering,
  Toolbar,
  ColumnChooser,
  TableColumnVisibility,
  SearchPanel,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';
import { TableCell, Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import { MovieStateType, MovieDetailsType } from '../../types';
import { deleteMovie } from '../redux/ducks/movies';

const MovieStatisticsPage: React.FC = () => {
  const [columns] = useState([
    { name: 'original_title', title: 'Title' },
    {
      name: 'production_companies',
      title: 'Companies',
      getCellValue: (row: MovieDetailsType) =>
        row.production_companies
          .map((company: { name: string }) => company.name)
          .join(', '),
    },
    {
      name: 'production_countries',
      title: 'Countries',
      getCellValue: (row: MovieDetailsType) =>
        row.production_countries
          .map((country: { name: string }) => country.name)
          .join(', '),
    },
    {
      name: 'genres',
      title: 'Genres',
      getCellValue: (row: MovieDetailsType) =>
        row.genres
          .map((genre: { id: number; name: string }) => genre.name)
          .join(', '),
    },
    { name: 'release_date', title: 'Release date' },
    { name: 'popularity', title: 'Popularity' },
    {
      name: 'budget',
      title: 'Budget',
      getCellValue: (row: MovieDetailsType) => `${row.budget / 1000000}M`,
    },
  ]);
  const rows = useSelector((state: MovieStateType) => state.movies);

  const [selection, setSelection] = useState<(string | number)[]>([]);
  const [defaultColumnWidths] = useState(
    columns.map((column) => {
      let width = 190;
      if (
        column.name === 'release_date' ||
        column.name === 'popularity' ||
        column.name === 'budget'
      )
        width = 130;
      return { columnName: column.name, width: width };
    })
  );

  const dispatch = useDispatch();

  const commitChanges = (changes: ChangeSet) => {
    if (changes.deleted) {
      dispatch(
        deleteMovie(parseInt(rows[parseInt(`${changes.deleted[0]}`)].id))
      );
    }
  };

  const onDeleteSelectedClick = () => {
    for (let i = 0; i < selection.length; i++) {
      dispatch(deleteMovie(parseInt(rows[parseInt(`${selection[i]}`)].id)));
    }
    setSelection([]);
  };

  const RowDetail = ({ row }: { row: MovieDetailsType }) => {
    console.log({ ...row });
    return <div>{row.overview}</div>;
  };

  return (
    <Paper>
      <Grid rows={rows} columns={columns}>
        <PagingState defaultCurrentPage={0} pageSize={8} />
        <SelectionState
          selection={selection}
          onSelectionChange={setSelection}
        />
        <SortingState
          defaultSorting={[{ columnName: 'popularity', direction: 'desc' }]}
        />
        <SearchState defaultValue="" />
        <FilteringState defaultFilters={[]} />
        <EditingState onCommitChanges={commitChanges} />
        <RowDetailState />

        <Toolbar />
        <SearchPanel />
        <IntegratedFiltering />
        <IntegratedSorting />
        <IntegratedPaging />
        <IntegratedSelection />
        <DragDropProvider />

        <Table />
        <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
        <TableHeaderRow showSortingControls />
        <TableColumnVisibility />
        <ColumnChooser />
        <TableEditColumn
          showDeleteCommand
          headerCellComponent={() => (
            <TableCell align="right">
              <Button
                variant="text"
                sx={{ fontSize: '10px' }}
                onClick={onDeleteSelectedClick}
              >
                Delete Selected
              </Button>
            </TableCell>
          )}
        />
        <TableSelection showSelectAll />
        <TableFilterRow />
        <PagingPanel />
        <TableRowDetail contentComponent={RowDetail} />
        <TableColumnReordering
          defaultOrder={columns.map((column) => column.name)}
        />
      </Grid>
    </Paper>
  );
};

export default MovieStatisticsPage;
