import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

// import { Pagination, SearchInput } from '@/components';
import { ORDERDATA_MENU } from '@/constants';
import { ONEPAGE_SIZE } from '@/constants';

import { Pagination } from '@/components/Pagination';
import { SearchInput } from '@/components/SearchInput';
import { OrderData } from '@/types/order';


export const Main = () => {
  const ResponseData = useLoaderData() as OrderData[];
  const [orderData, setOrderData] = useState<OrderData[]>(ResponseData);

  //   const ResponseData = useLoaderData() as OrderData[];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const startPage = ONEPAGE_SIZE * currentPage - ONEPAGE_SIZE;
  const finishPage = ONEPAGE_SIZE * currentPage;

  const [filterOption, setFilterOption] = useState<boolean | null>(null);

  const useStatusFilterOrder = (data: OrderData[], status: boolean) => {
    return data.filter((el) => el.status === status);
  };

  useEffect(() => {
    if (filterOption !== null) {
      setOrderData(useStatusFilterOrder(ResponseData, filterOption));
    }
  }, [filterOption]);

  //   const [orderData, setOrderData] = useState<OrderData[]>(ResponseData);

  //   const [orderData, setOrderData] = useState<OrderData[]>(orderData.slice(startPage, finishPage));
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const [isDateAscending, setIsDateAscending] = useState<boolean | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => setOrderData(orderData.slice(startPage, finishPage)), [startPage, finishPage]);

  useEffect(() => {
    if (!isAscending) {
      setOrderData(orderData.sort((a, b) => a.id - b.id));
    } else {
      setOrderData(orderData.sort((a, b) => b.id - a.id));
    }
  }, [isAscending]);

  useEffect(() => {
    if (isDateAscending !== null) {
      const sortedData = orderData.sort((a, b) => {
        if (!isDateAscending) {
          return new Date(a.transaction_time).getTime() - new Date(b.transaction_time).getTime();
        } else {
          return new Date(b.transaction_time).getTime() - new Date(a.transaction_time).getTime();
        }
      });

      setOrderData(sortedData);
    }
  }, [isDateAscending]);

  useEffect(() => {
    if (searchTerm === '') {
      setCurrentPage(1);
      setOrderData(orderData);
      return;
    }

    const filteredData = orderData.filter((order) =>
      order.customer_name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setOrderData(filteredData);
  }, [searchTerm]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          p: 1,
          m: 1,
        }}
      >
        <Button onClick={() => setIsDateAscending(!isDateAscending)}>거래시간순</Button>

        <Button onClick={() => setIsAscending(!isAscending)}>주문번호순</Button>

        {/* <Button>주문처리상태</Button> */}
        <Button
          //   color={filterOption ? 'blue.400' : 'gray.400'}
          //   cursor='pointer'
          onClick={() => setFilterOption(true)}
        >
          주문처리상태 O
        </Button>
        <Button
          //   color={filterOption === false ? 'blue.400' : 'gray.400'}
          //   cursor='pointer'
          onClick={() => setFilterOption(false)}
        >
          주문처리상태 X
        </Button>
      </Box>

      <SearchInput onSearchChange={setSearchTerm} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              {/* <TableCell onClick={() => setIsAscending(!isAscending)} cursor={'pointer'}>
                주문번호 {isAscending ? '(오름차순)' : '(내림차순)'}
              </TableCell>
              <TableCell onClick={() => setIsDateAscending(!isDateAscending)} cursor={'pointer'}>
                거래시간{' '}
                {isDateAscending !== null && (isDateAscending ? '(오름차순)' : '(내림차순)')}
              </TableCell>
              <TableCell>주문처리상태</TableCell>
              <TableCell>고객번호</TableCell>
              <TableCell>고객이름</TableCell>
              <TableCell>가격</TableCell> */}
              {ORDERDATA_MENU.map((el, i) => (
                <TableCell key={i}>{el}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          {orderData.slice(startPage, finishPage).map((el) => (
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
        totalPages={Math.floor(orderData.length / ONEPAGE_SIZE)}
        onPageChange={setCurrentPage}
      />
    </>
  );
};
