import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { OrderTableBody } from './OrderTableBody';
import { OrderTableHead } from './OrderTableHead';
import { OrderTableToolbar } from './OrderTableToolbar';

import { useTableFilter } from '@/hooks/useTableFilter';
import { useTableOption } from '@/hooks/useTableOption';
import { OrderData } from '@/types/OrderDataType';

interface OrderTableProps {
  rows: OrderData[];
}

export const OrderTable = ({ rows }: OrderTableProps) => {
  const { currentFilter, handleFilterChange, filteredData } = useTableFilter(rows);
  const {
    page,
    dense,
    ascOrDesc,
    orderBy,
    rowsPerPage,
    handleChangePage,
    handleChangeDense,
    handleChangeRowsPerPage,
    handleRequestSort,
  } = useTableOption();

  return (
    <Box>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <OrderTableToolbar onChange={handleFilterChange} currentFilter={currentFilter} />
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label='sticky table' size={dense ? 'small' : 'medium'}>
            <OrderTableHead
              ascOrDesc={ascOrDesc}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <OrderTableBody
              rows={filteredData}
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
