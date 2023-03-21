import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import { OrderData } from '@/types/order';

export const Order = ({
  id,
  currency,
  customer_id,
  customer_name,
  transaction_time,
  status,
}: OrderData) => {
  return (
    <TableBody>
      <TableCell>{id}</TableCell>
      <TableCell>{transaction_time}</TableCell>
      <TableCell>{status ? 'O' : 'X'}</TableCell>
      <TableCell>{customer_id}</TableCell>
      <TableCell>{customer_name}</TableCell>
      <TableCell>{currency}</TableCell>
    </TableBody>
  );
};
