import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { orderApiQueryKey } from '@/constants';

import { TablePagination } from './TablePagination';

import getOrderData, { PAGINATION_PER_PAGE } from '@/api/orderList';
import { useOrderTableFunctions } from '@/hooks/useOrderTableFunctions';
import { OrderProps, SortType, StatusType } from '@/types/props';

export const OrderTable = () => {
  const { sortById, sortByTime, filterByStatus } = useOrderTableFunctions();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.set(orderApiQueryKey.DATE, '2023-03-08');
    searchParams.set(orderApiQueryKey.PAGE, '1');

    setSearchParams(searchParams);
  }, []);

  const page = searchParams.get(orderApiQueryKey.PAGE);
  const date = searchParams.get(orderApiQueryKey.DATE);
  const sort = searchParams.get(orderApiQueryKey.SORT) as SortType;
  const status = searchParams.get(orderApiQueryKey.STATUS) as StatusType;
  const search = searchParams.get(orderApiQueryKey.SEARCH);

  const { data, isSuccess } = useQuery(
    ['order', page, date, sort, status, search],
    () => getOrderData.getData(),
    {
      select: (res) => {
        const totalCount = res.length;
        const orderList = res;
        return { totalCount, orderList };
      },
      staleTime: 5000,
    },
  );

  const headerRows = [
    {
      title: '주문번호',
      callback: sortById,
    },
    {
      title: '거래시간',
      callback: sortByTime,
    },
    {
      title: '주문처리상태',
      callback: filterByStatus,
    },
    { title: '고객번호' },
    { title: '고객이름' },
    { title: '가격' },
  ];

  const pageQueryString = page ? Number(page) : null;
  const dateQueryString = date ? new Date(date) : null;

  const filterByDate = (origin: OrderProps[]) =>
    dateQueryString === null
      ? origin
      : origin.filter(({ transaction_time }) => {
          const curDate = new Date(transaction_time);

          return (
            curDate.getFullYear() === dateQueryString.getFullYear() &&
            curDate.getMonth() === dateQueryString.getMonth() &&
            curDate.getDate() === dateQueryString.getDate()
          );
        });

  const paginatedData = (origin: OrderProps[]) =>
    pageQueryString === null
      ? origin
      : origin.slice(
          PAGINATION_PER_PAGE * (pageQueryString - 1),
          PAGINATION_PER_PAGE * pageQueryString,
        );

  const sortData = (origin: OrderProps[]) =>
    sort === 'ID_DES'
      ? origin.sort((a, b) => b.id - a.id)
      : sort === 'ID_ASC'
      ? origin.sort((a, b) => a.id - b.id)
      : sort === 'TIME_DES'
      ? origin.sort(
          (a, b) => new Date(b.transaction_time).getTime() - new Date(a.transaction_time).getTime(),
        )
      : sort === 'TIME_ASC'
      ? origin.sort(
          (a, b) => new Date(a.transaction_time).getTime() - new Date(b.transaction_time).getTime(),
        )
      : origin;

  const filterByStatusOrder = (origin: OrderProps[]) =>
    status === 'TRUE'
      ? origin.filter(({ status }) => status)
      : status === 'FALSE'
      ? origin.filter(({ status }) => !status)
      : origin;

  const filterBySearch = (origin: OrderProps[]) =>
    search === null
      ? origin
      : origin.filter(({ customer_name }) => customer_name.toLowerCase().includes(search));

  const convertedData = paginatedData(
    sortData(filterBySearch(filterByStatusOrder(filterByDate(data?.orderList)))),
  );

  const bodyRows = !isSuccess
    ? []
    : convertedData.map((row) => ({
        ...row,
      }));

  return (
    <>
      {isSuccess ? (
        <Box sx={{ width: 1, backgroundColor: 'white' }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  {headerRows.map(({ title, callback }, i) => (
                    <TableCell key={title + i} onClick={callback}>
                      {title}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {bodyRows.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.transaction_time}</TableCell>
                    <TableCell>{order.status ? 'complete' : 'in progress'}</TableCell>
                    <TableCell>{order.customer_id}</TableCell>
                    <TableCell>{order.customer_name}</TableCell>
                    <TableCell>{order.currency}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination totalCount={data?.totalCount ?? 0} />
        </Box>
      ) : (
        'fail'
      )}
    </>
  );
};
