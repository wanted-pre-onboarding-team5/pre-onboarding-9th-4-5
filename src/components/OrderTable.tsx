import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

import { DEFAULT_DATA_ROW_COUNT } from '@/constants';

import { OrderData } from '@/types/OrderDataType';

interface Column {
  id: 'id' | 'transaction_time' | 'status' | 'customer_id' | 'customer_name' | 'currency';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

interface OrderTableProps {
  rows: OrderData[];
}

const columns: readonly Column[] = [
  { id: 'id', label: 'id', minWidth: 50 },
  { id: 'transaction_time', label: 'transaction_time', minWidth: 100 },
  {
    id: 'status',
    label: 'status',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'customer_id',
    label: 'customer_id',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'customer_name',
    label: 'customer_name',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'currency',
    label: 'currency',
    minWidth: 170,
    align: 'right',
  },
];

export const OrderTable = ({ rows }: OrderTableProps) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_DATA_ROW_COUNT);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {typeof value === 'boolean' ? (value ? 'true' : 'false') : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
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
  );
};
