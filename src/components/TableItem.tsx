import { TableCell, TableRow } from '@mui/material';

export const TableItem = ({ data }) => {
  return (
    <TableRow key={data.id}>
      <TableCell style={{ textAlign: 'center' }}>{data.customer_id}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{data.customer_name}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{data.currency}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{data.transaction_time}</TableCell>
      <TableCell style={{ textAlign: 'center' }}>{data.status === true ? '🆗' : '❌'}</TableCell>
    </TableRow>
  );
};
