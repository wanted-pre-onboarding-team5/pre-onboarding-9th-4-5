import { Box, Table, TableContainer, TablePagination, Paper } from '@mui/material';

import { Filters } from '@/pages';

import { BodyRows } from './BodyRows';
import { HeaderRow } from './HeaderRow';

import { Order } from '@/types/table';

export interface TableOption {
  defaultOrder: Order;
  defaultOrderBy: string;
  defaultRowPerPage: number;
  headerCells: HeaderCell[];
  filters: Filters;
  style: React.CSSProperties;
  handleRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number,
  ) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  const { filters, handleRequestSort, handleChangePage, handleChangeRowsPerPage } = tableOption;
  const { order, orderBy, page, rowsPerPage } = filters;

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
              order={order || 'asc'}
              orderBy={orderBy || 'id'}
              onRequestSort={handleRequestSort}
              headCells={tableOption?.headerCells}
            />
            <BodyRows
              order={order || 'asc'}
              orderBy={orderBy || 'id'}
              page={Number(page)}
              rowsPerPage={Number(rowsPerPage)}
              tableDataList={tableDataList}
              tableOption={tableOption}
            />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50, 100]}
          component='div'
          count={tableDataList.length}
          rowsPerPage={Number(rowsPerPage)}
          page={Number(page)}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
