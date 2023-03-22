import { Paper, Table, TableBody, TableContainer } from '@mui/material';
import { useState } from 'react';

import { TableHeader } from './TableHeader';
import { TableItem } from './TableItem';

import { useGetData } from '@/hooks/useGetData';
import { QueryData } from '@/types/queryData';

interface TabListProps {
  searchResult: QueryData[];
  currentPage: number;
}

export const TableList = ({ currentPage, searchResult }: TabListProps) => {
  const { data: getDatas } = useGetData();
  const [isSorted, setIsSorted] = useState<boolean>(false);
  const [checkSortItem, setCheckSortItem] = useState<string>('');
  const [sortedCustomerId, setSortedCustomerId] = useState();
  const [sortedTransactionTime, setSortedTransactionTime] = useState();
  const listPerPage = 50;
  const offset = (currentPage - 1) * listPerPage;

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 650 }}>
      <Table sx={{ minWidth: 650 }} aria-label='switchOne-data-table'>
        <TableHeader
          getDatas={getDatas}
          isSorted={isSorted}
          setIsSorted={setIsSorted}
          setSortedCustomerId={setSortedCustomerId}
          checkSortItem={checkSortItem}
          setCheckSortItem={setCheckSortItem}
          sortedTransactionTime={sortedTransactionTime}
          setSortedTransactionTime={setSortedTransactionTime}
        />
        <TableBody>
          {/* 주문번호 정렬 */}
          {checkSortItem === 'customerId' && isSorted
            ? sortedCustomerId
                ?.slice(offset, offset + listPerPage)
                .map((data) => <TableItem data={data} key={data.id} />)
            : // 거래 시간 정렬
            checkSortItem === 'transactionTime' && isSorted
            ? sortedTransactionTime
                ?.slice(offset, offset + listPerPage)
                .map((data) => <TableItem data={data} key={data.id} />)
            : // 이름 필터
            searchResult
            ? searchResult
                ?.slice(offset, offset + listPerPage)
                .map((data) => <TableItem data={data} key={data.id} />)
            : getDatas
                ?.slice(offset, offset + listPerPage)
                .map((data) => <TableItem data={data} key={data.id} />)}
          {/* 다 아니라면 */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
