import { TableContainer, Table, TablePagination, Typography, Stack, Paper } from '@mui/material';
import React from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';

import TransactionTableBody from './TransactionTableBody';
import TransactionTableHead from './TransactionTableHead';

import type { ResponseData } from '@/types/responseData';

import { ROWS_PER_PAGE } from '@/constants/table';
import { processData } from '@/helpers/processData';

const TransactionTable = () => {
  const [page, setPage] = React.useState(0);

  const date = new Date();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') as 'id' | 'transaction_time';
  const status = searchParams.get('status');
  const datetime = searchParams.get('datetime');
  const search = searchParams.get('search');

  const loaderData = useLoaderData() as ResponseData;
  const processedData = processData(loaderData, { sort, datetime, status, search });

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  return (
    <Paper>
      <TableContainer component={'div'} sx={{ maxHeight: 650 }}>
        <Table stickyHeader aria-label='transaction-table'>
          <TransactionTableHead />
          <TransactionTableBody page={page} processedData={processedData} search={search} />
        </Table>
      </TableContainer>
      <Stack
        sx={{ marginTop: 0, borderTop: '1px solid #cecece' }}
        direction='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Typography variant='body2' px={4} color='#666666'>
          updated : {date?.toLocaleTimeString()}
        </Typography>
        <TablePagination
          count={processedData.length}
          component='div'
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={ROWS_PER_PAGE}
          rowsPerPageOptions={[ROWS_PER_PAGE]}
        />
      </Stack>
    </Paper>
  );
};

export default TransactionTable;
