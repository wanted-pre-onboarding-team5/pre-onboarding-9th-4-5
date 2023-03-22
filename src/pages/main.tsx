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
import { useLoaderData, useSearchParams } from 'react-router-dom';

// import { Pagination, SearchInput } from '@/components';
import { ORDERDATA_MENU } from '@/constants';
import { ONEPAGE_SIZE } from '@/constants';

import { Pagination } from '@/components/Pagination';
import { SearchInput } from '@/components/SearchInput';
import { mainLoader } from '@/router/mainLoader';
import { OrderData } from '@/types/order';

export const Main = () => {
  const [responseData, setResponseData] = useState<OrderData[]>(useLoaderData() as OrderData[]);
  const [orderData, setOrderData] = useState<OrderData[]>(responseData);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const startPage = ONEPAGE_SIZE * currentPage - ONEPAGE_SIZE;
  const finishPage = ONEPAGE_SIZE * currentPage;

  const [filterOption, setFilterOption] = useState<boolean | null>(null);

  const [query] = useSearchParams();

  useEffect(() => {
    setCurrentPage(Number(query.get('pages')));

    const intervalId = setInterval(async () => {
      const data = await mainLoader();
      setResponseData(data);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setOrderData(responseData);
  }, [responseData]);

  const useStatusFilterOrder = (data: OrderData[], status: boolean) => {
    return data.filter((el) => el.status === status);
  };

  useEffect(() => {
    if (filterOption !== null) {
      setOrderData(useStatusFilterOrder(responseData, filterOption));
    }
  }, [filterOption]);

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
      <Box display='flex' justifyContent='center' my={5}>
        <Button onClick={() => setIsDateAscending(!isDateAscending)}>거래시간순</Button>

        <Button onClick={() => setIsAscending(!isAscending)}>주문번호순</Button>

        <Button onClick={() => setFilterOption(!filterOption)}>주문처리상태 여부</Button>
      </Box>
      <Box display='flex' justifyContent='center' my={5}>
        <SearchInput onSearchChange={setSearchTerm} />
      </Box>
      <Box display='flex' justifyContent='center' my={5}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
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
      </Box>
      <Box display='flex' flexDirection='row' justifyContent='center'>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.floor(orderData.length / ONEPAGE_SIZE)}
          onPageChange={setCurrentPage}
        />
      </Box>
    </>
  );
};
