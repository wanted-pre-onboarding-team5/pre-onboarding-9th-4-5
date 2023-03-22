import { TableCell, TableRow } from '@mui/material';

import { QueryData } from '@/types/queryData';
interface TableItemProps {
  data: QueryData;
}

export const TableItem = ({ data }: TableItemProps) => {
  const {
    id,
    customer_id: customerID,
    customer_name: customerName,
    currency,
    transaction_time: transactionTime,
    status,
  } = data;

  return (
    <TableRow key={id}>
      <TableCell style={{ textAlign: 'center' }}>{customerID}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{customerName}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{currency}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{transactionTime}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{status === true ? '🆗' : '❌'}</TableCell>
    </TableRow>
  );
};
