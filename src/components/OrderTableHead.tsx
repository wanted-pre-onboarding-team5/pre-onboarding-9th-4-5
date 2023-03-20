import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { ORDER_TABLE_COLUMNS } from '@/constants';

export const OrderTableHead = () => {
  return (
    <TableHead>
      <TableRow>
        {ORDER_TABLE_COLUMNS.map((column) => (
          <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
