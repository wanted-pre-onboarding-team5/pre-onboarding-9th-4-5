import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import * as React from 'react';

import { DEFAULT_DATA_ROW_COUNT } from '@/constants';
import { AscOrDesc } from '@/utils';

import { OrderTableBody } from './OrderTableBody';
import { OrderTableHead } from './OrderTableHead';

import { OrderData, OrderDataKey } from '@/types/OrderDataType';

interface OrderTableProps {
  rows: OrderData[];
}

export interface TableSortProps {
  ascOrDesc: AscOrDesc;
  orderBy: OrderDataKey;
}

export const OrderTable = ({ rows }: OrderTableProps) => {
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_DATA_ROW_COUNT);
  const [ascOrDesc, setAscOrDesc] = React.useState<AscOrDesc>('asc');
  const [orderBy, setOrderBy] = React.useState<OrderDataKey>('id');

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: OrderDataKey) => {
    const isAsc = orderBy === property && ascOrDesc === 'asc';
    setAscOrDesc(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Box>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader aria-label='sticky table' size={dense ? 'small' : 'medium'}>
            <OrderTableHead
              ascOrDesc={ascOrDesc}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <OrderTableBody
              rows={rows}
              ascOrDesc={ascOrDesc}
              orderBy={orderBy}
              page={page}
              rowsPerPage={rowsPerPage}
            />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label='Dense padding'
      />
    </Box>
  );
};
