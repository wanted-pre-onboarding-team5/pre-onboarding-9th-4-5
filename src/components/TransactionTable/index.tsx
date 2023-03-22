import { TableContainer, Table, TablePagination } from '@mui/material';
import React from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';

import TransactionTableBody from './TransactionTableBody';
import TransactionTableHead from './TransactionTableHead';

import type { ResponseData } from '@/types/responseData';

import { ROWS_PER_PAGE } from '@/constants/table';
import { processData } from '@/helpers/processData';

const TransactionTable = () => {
  const [page, setPage] = React.useState(0);
  const pageTopRef = React.useRef<HTMLDivElement>(null);

  const [searchParams] = useSearchParams();
  const sort = searchParams.get('sort') as 'id' | 'datetime';
  const status = searchParams.get('status');
  const datetime = searchParams.get('datetime');
  const search = searchParams.get('search');

  const loaderData = useLoaderData() as ResponseData;
  const processedData = processData(loaderData, { sort, datetime, status, search });

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
    if (pageTopRef.current) {
      pageTopRef.current.scrollIntoView();
    }
  };

  return (
    <TableContainer component='div' ref={pageTopRef}>
      <Table aria-label='transaction-table'>
        <TransactionTableHead />
        <TransactionTableBody page={page} processedData={processedData} search={search} />
      </Table>
      <TablePagination
        component='div'
        count={processedData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={ROWS_PER_PAGE}
        rowsPerPageOptions={[ROWS_PER_PAGE]}
      />
    </TableContainer>
  );
};

export default TransactionTable;
