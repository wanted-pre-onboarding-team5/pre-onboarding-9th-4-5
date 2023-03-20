import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export const TableList = ({ getDatas, currPage }) => {
  const listPerPage = 50;
  const offset = (currPage - 1) * listPerPage;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='switchOne-data-table'>
        <TableHead>
          <TableRow>
            <TableCell>순번</TableCell>
            <TableCell>고객번호</TableCell>
            <TableCell>고객명</TableCell>
            <TableCell>금액</TableCell>
            <TableCell>거래 시간</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getDatas?.slice(offset, offset + listPerPage).map((data) => (
            <TableRow key={data.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.customer_id}</TableCell>
              <TableCell>{data.customer_name}</TableCell>
              <TableCell>{data.currency}</TableCell>
              <TableCell>{data.transaction_time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
