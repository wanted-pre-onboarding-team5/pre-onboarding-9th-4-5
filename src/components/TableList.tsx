import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { QueryData } from '@/types/queryData';

interface TabListProps {
  getDatas: QueryData[];
  currPage: React.Dispatch<React.SetStateAction<number>>;
}

export const TableList = ({ getDatas, currPage }: TabListProps) => {
  const listPerPage = 50;
  const offset = (currPage - 1) * listPerPage;
  const tableCellStyle = { fontWeight: 700, fontSize: 20, color: 'white', textAlign: 'center' };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='switchOne-data-table'>
        <TableHead>
          <TableRow style={{ backgroundColor: 'orange' }}>
            <TableCell style={tableCellStyle}>주문번호</TableCell>
            <TableCell style={tableCellStyle}>고객명</TableCell>
            <TableCell style={tableCellStyle}>금액</TableCell>
            <TableCell style={tableCellStyle}>거래 시간</TableCell>
            <TableCell style={tableCellStyle}>상태</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getDatas?.slice(offset, offset + listPerPage).map((data) => (
            <TableRow key={data.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell style={{ textAlign: 'center' }}>{data.customer_id}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{data.customer_name}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{data.currency}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{data.transaction_time}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>
                {data.status === true ? '🆗' : '❌'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
