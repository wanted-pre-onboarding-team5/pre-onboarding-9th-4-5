import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { ORDER_TABLE_COLUMNS } from '@/constants';
import { getComparator, stableSort } from '@/utils';

import { TableSortProps } from './index';

import { OrderData } from '@/types/OrderDataType';

interface OrderTableBodyProps extends TableSortProps {
  rows: OrderData[];
  page: number;
  rowsPerPage: number;
}

export const OrderTableBody = ({
  rows,
  ascOrDesc,
  orderBy,
  page,
  rowsPerPage,
}: OrderTableBodyProps) => {
  return (
    <TableBody>
      {stableSort(rows, getComparator(ascOrDesc, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
          return (
            <TableRow hover tabIndex={-1} key={row.id}>
              {ORDER_TABLE_COLUMNS.map((column) => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id} align={column.align}>
                    {column.id === 'status' ? (value ? '✅' : '❌') : value}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
    </TableBody>
  );
};
