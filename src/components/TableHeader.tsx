import { TableCell, TableHead, TableRow } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

import { QueryData } from '@/types/queryData';

interface TableHeaderProps {
  getDatas: QueryData[];
  isSortedCustomerId: boolean;
  setIsSortedCustomerId: Dispatch<SetStateAction<boolean>>;
  setSortedCustomerId: (data: QueryData[]) => void;
}

export const TableHeader = ({
  getDatas,
  isSortedCustomerId,
  setIsSortedCustomerId,
  setSortedCustomerId,
}: TableHeaderProps) => {
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
  );
};
