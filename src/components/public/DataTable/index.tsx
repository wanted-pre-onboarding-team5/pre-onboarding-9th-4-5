import { Box, Table, TableContainer, TablePagination, Paper } from '@mui/material';
import { useState } from 'react';

import { BodyRows } from './BodyRows';
import { HeaderRow } from './HeaderRow';

import { Order } from '@/types/table';

export interface TableOption {
  defaultOrder: Order;
  defaultOrderBy: string;
  headerCells: HeaderCell[];
}

export interface HeaderCell {
  id: string;
  align: 'right' | 'left' | 'center';
  disablePadding: boolean;
  sorting: boolean;
  label: string;
}

export default function DataTable({
  tableDataList,
  tableOption,
}: {
  tableDataList: [];
  tableOption: TableOption;
}) {
  const [order, setOrder] = useState<Order>(tableOption.defaultOrder);
  const [orderBy, setOrderBy] = useState(tableOption.defaultOrderBy);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={{ width: '100%', borderTop: 1, borderColor: '#eee' }}>
      <Paper sx={{ width: '100%', height: '70vh', mb: 2 }}>
        <TableContainer sx={{ maxHeight: '100%' }}>
          <Table
            stickyHeader
            aria-label='sticky table'
            sx={{ minWidth: 750 }}
            aria-labelledby='tableTitle'
            size={'medium'}
          >
            <HeaderRow
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={tableOption?.headerCells}
            />
            <BodyRows
              order={order}
              orderBy={orderBy}
              page={page}
              rowsPerPage={rowsPerPage}
              tableDataList={tableDataList}
            />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50, 100]}
          component='div'
          count={tableDataList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
