import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { DEFAULT_PAGE, orderApiQueryKey, TODAY } from '@/constants';

import { TablePagination } from '../OrderTableTools/TablePagination';
import SearchForm from '../OrderTableTools/TableSearchForm';

import { OrderTableBody } from './OrderTableBody';
import { OrderTableHead } from './OrderTableHead';

import getOrderData from '@/api/orderList';
import { SortType, StatusType } from '@/types/props';

export const OrderTable = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.set(orderApiQueryKey.DATE, TODAY);
    searchParams.set(orderApiQueryKey.PAGE, DEFAULT_PAGE);

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
  return (
    <>
      {isSuccess ? (
        <Box sx={{ width: 1, backgroundColor: 'white' }}>
          <SearchForm />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <OrderTableHead />
              <OrderTableBody
                page={page}
                date={date}
                sort={sort}
                status={status}
                search={search}
                data={data}
                isSuccess={isSuccess}
              />
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