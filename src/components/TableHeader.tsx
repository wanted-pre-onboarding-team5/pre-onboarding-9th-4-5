import { TableCell, TableHead, TableRow } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

import { QueryData } from '@/types/queryData';

interface TableHeaderProps {
  getDatas: QueryData[];
  isSorted: boolean;
  setIsSorted: Dispatch<SetStateAction<boolean>>;
  setSortedCustomerId: (data: QueryData[]) => void;
  checkSortItem: string;
  setCheckSortItem: Dispatch<SetStateAction<string>>;
  setSortedTransactionTime: (data: QueryData[]) => void;
}

export const TableHeader = ({
  getDatas,
  isSorted,
  setIsSorted,
  setSortedCustomerId,
  checkSortItem,
  setCheckSortItem,
  setSortedTransactionTime,
}: TableHeaderProps) => {
  const tableCellStyle = { fontWeight: 700, fontSize: 20, color: 'white', textAlign: 'center' };

  const handleCustomerId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSorted(!isSorted);
    setCheckSortItem(e.target.id);
    setSortedCustomerId(getDatas.sort((a, b) => b.customer_id - a.customer_id));
  };

  const handleTransactionTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSorted(!isSorted);
    setCheckSortItem(e.target.id);
    setSortedTransactionTime(
      getDatas.sort((a, b) => new Date(b.transaction_time) - new Date(a.transaction_time)),
    );
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
          id='customerId'
          onClick={handleCustomerId}
        >
          주문번호
          {checkSortItem === 'customerId' && isSorted ? (
            <span style={{ fontSize: 14, marginLeft: 20 }}>⏫</span>
          ) : (
            <span style={{ fontSize: 14, marginLeft: 20 }}>⏬</span>
          )}
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
          id='transactionTime'
          onClick={handleTransactionTime}
        >
          거래 시간
          {checkSortItem === 'transactionTime' && isSorted ? (
            <span style={{ fontSize: 14, marginLeft: 20 }}>⏫</span>
          ) : (
            <span style={{ fontSize: 14, marginLeft: 20 }}>⏬</span>
          )}
        </TableCell>
        <TableCell style={tableCellStyle}>상태</TableCell>
      </TableRow>
    </TableHead>
  );
};
