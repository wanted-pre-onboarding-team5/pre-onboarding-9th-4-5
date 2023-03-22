import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { HeaderCell } from '../index';

interface HeaderRowProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: string;
  orderBy: string;
  headCells: HeaderCell[];
}

export const HeaderRow = (props: HeaderRowProps) => {
  const { order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler = (property: string) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            variant='head'
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ border: '1px solid #fff', backgroundColor: '#F7941C' }}
          >
            <TableSortLabel
              sx={{ fontWeight: 'bold' }}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              hideSortIcon={true}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
