import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { MAX_SIZE } from '@/constants';

// import { Pagination, SearchInput } from '@/components';
import { Pagination } from '@/components/Pagination';
import { SearchInput } from '@/components/SearchInput';
import { OrderData } from '@/types/order';

export const Main = () => {
  const orderData = useLoaderData() as OrderData[];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const startPage = MAX_SIZE * currentPage - MAX_SIZE;
  const finishPage = MAX_SIZE * currentPage;

  const [test, setTest] = useState<OrderData[]>(orderData.slice(startPage, finishPage));
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const [isDateAscending, setIsDateAscending] = useState<boolean | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => setTest(orderData.slice(startPage, finishPage)), [startPage, finishPage]);

  useEffect(() => {
    if (!isAscending) {
      setTest(test.sort((a, b) => a.id - b.id));
    } else {
      setTest(test.sort((a, b) => b.id - a.id));
    }
  }, [isAscending]);

  useEffect(() => {
    if (isDateAscending !== null) {
      const sortedData = test.sort((a, b) => {
        if (!isDateAscending) {
          return new Date(a.transaction_time).getTime() - new Date(b.transaction_time).getTime();
        } else {
          return new Date(b.transaction_time).getTime() - new Date(a.transaction_time).getTime();
        }
      });

      setTest(sortedData);
    }
  }, [isDateAscending]);

  useEffect(() => {
    if (searchTerm === '') {
      setCurrentPage(1);
      setTest(orderData);
      return;
    }

    const filteredData = orderData.filter((order) =>
      order.customer_name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setTest(filteredData);
  }, [searchTerm]);

  return (
    <>
      <SearchInput onSearchChange={setSearchTerm} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell onClick={() => setIsAscending(!isAscending)} cursor={'pointer'}>
                주문번호 {isAscending ? '(오름차순)' : '(내림차순)'}
              </TableCell>
              <TableCell onClick={() => setIsDateAscending(!isDateAscending)} cursor={'pointer'}>
                거래시간{' '}
                {isDateAscending !== null && (isDateAscending ? '(오름차순)' : '(내림차순)')}
              </TableCell>
              <TableCell>주문처리상태</TableCell>
              <TableCell>고객번호</TableCell>
              <TableCell>고객이름</TableCell>
              <TableCell>가격</TableCell>
            </TableRow>
          </TableHead>
          {/* {test.map((el) => ( */}
          {test.slice(startPage, finishPage).map((el) => (
            <TableBody key={el.id}>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{el.id}</TableCell>
                <TableCell>{el.transaction_time}</TableCell>
                <TableCell>{el.status ? '완료' : '진행중'}</TableCell>
                <TableCell>{el.customer_id}</TableCell>
                <TableCell>{el.customer_name}</TableCell>
                <TableCell>{el.currency}</TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={
          searchTerm ? parseInt((test.length / MAX_SIZE).toString()) : orderData.length / MAX_SIZE
        }
        onPageChange={setCurrentPage}
      />
    </>
  );
};
