import { TableBody, TableCell, TableRow } from '@mui/material';

import { TableOption } from '../index';

import { Order } from '@/types/table';

interface BodyRowsProps {
  order: Order;
  orderBy: string;
  page: number;
  rowsPerPage: number;
  tableDataList: [];
  tableOption: TableOption;
}

export const BodyRows = (props: BodyRowsProps) => {
  const { tableDataList, order, orderBy, page, rowsPerPage, tableOption } = props;

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(
    order: Order,
    orderBy: Key,
  ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  return (
    <TableBody>
      {stableSort(tableDataList, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          return (
            <TableRow tabIndex={-1} key={index}>
              {tableOption.headerCells.map((cell, index) => {
                return (
                  <TableCell
                    key={index}
                    align={cell.align}
                    padding={cell.disablePadding ? 'none' : 'normal'}
                    sx={{ ...cell.style, border: '1px solid #eee', borderBottomColor: '#bbb' }}
                  >
                    {String(row[cell.id])}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
    </TableBody>
  );
};
