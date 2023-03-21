import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useState } from 'react';

import { TableItem } from './TableItem';

import { QueryData } from '@/types/queryData';

interface TabListProps {
  getDatas: QueryData[];
  currPage: number;
}

export const TableList = ({ getDatas, currPage }: TabListProps) => {
  const [isSortedCustomerId, setIsSortedCustomerId] = useState(false);
  const [sortedCustomerId, setSortedCustomerId] = useState();

  const listPerPage = 50;
  const offset = (currPage - 1) * listPerPage;
  const tableCellStyle = { fontWeight: 700, fontSize: 20, color: 'white', textAlign: 'center' };

  const handleCustomerId = () => {
    setIsSortedCustomerId(!isSortedCustomerId);
    setSortedCustomerId(getDatas.sort((a, b) => b.customer_id - a.customer_id));
  };

  const handleTransactionTime = () => {
    // setIsSortedTransactionTime(!isSortedTransactionTime);
    // setSortedTransactionTime(
    //   getDatas.sort((a, b) => new Date(b.transaction_time) - new Date(a.transaction_time)),
    // );
  };

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 650 }}>
      <Table sx={{ minWidth: 650 }} aria-label='switchOne-data-table'>
        <TableHead>
          <TableRow style={{ backgroundColor: 'orange' }}>
            <TableCell
              style={{
                fontWeight: 700,
                fontSize: 20,
                color: 'white',
                textAlign: 'center',
                cursor: 'pointer',
              }}
              onClick={handleCustomerId}
            >
              주문번호
            </TableCell>
            <TableCell style={tableCellStyle}>고객명</TableCell>
            <TableCell style={tableCellStyle}>금액</TableCell>
            <TableCell
              style={{
                fontWeight: 700,
                fontSize: 20,
                color: 'white',
                textAlign: 'center',
                cursor: 'pointer',
              }}
              onClick={handleTransactionTime}
            >
              거래 시간
            </TableCell>
            <TableCell style={tableCellStyle}>상태</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isSortedCustomerId
            ? sortedCustomerId
                ?.slice(offset, offset + listPerPage)
                .map((data) => <TableItem data={data} key={data.id} />)
            : getDatas
                ?.slice(offset, offset + listPerPage)
                .map((data) => <TableItem data={data} key={data.id} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
