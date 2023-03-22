import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableSortLabel,
  TableCell,
  tableCellClasses,
  TablePagination,
  styled,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';

import HightLight from './HightLight';

import type { ResponseData } from '@/types/responseData';

import { TABLE_HEAD_CONTEXT, ROWS_PER_PAGE } from '@/constants/table';
import { processData } from '@/helpers/processData';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    borderBottom: '1px solid #cecece',
    color: '#1B2E57',
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    borderBottom: '1px solid #eeefef',
    color: '#1B2E57',
  },
}));

const TransactionTable = () => {
  const [page, setPage] = React.useState(0);
  const pageTopRef = React.useRef<HTMLDivElement>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') as 'id' | 'datetime';
  const status = searchParams.get('status');
  const datetime = searchParams.get('datetime');
  const search = searchParams.get('search');

  const loaderData = useLoaderData() as ResponseData;
  const processedDataArray = processData(loaderData, { sort, datetime, status, search });

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
    if (pageTopRef.current) {
      pageTopRef.current.scrollIntoView();
    }
  };

  return (
    <TableContainer component='div' ref={pageTopRef}>
      <Table aria-label='transaction-table'>
        <TableHead>
          <TableRow>
            {TABLE_HEAD_CONTEXT.map((item) =>
              item.isSortPosssible ? (
                <StyledTableCell size='small' sortDirection='desc' key={item.field}>
                  <TableSortLabel
                    direction='desc'
                    data-testid={`transaction-table-head-${item.field}`}
                    active={sort === item.field}
                    onClick={() => {
                      if (searchParams.has('sort')) {
                        searchParams.delete('sort');
                      }

                      searchParams.append('sort', item.field);
                      setSearchParams(searchParams);
                    }}
                  >
                    {item.label}
                  </TableSortLabel>
                </StyledTableCell>
              ) : (
                <StyledTableCell key={item.field} size='small'>
                  {item.label}
                </StyledTableCell>
              ),
            )}
          </TableRow>
        </TableHead>
        <TableBody data-testid='transaction-table-body'>
          {processedDataArray
            .slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)
            .map((item) => (
              <TableRow key={item.id}>
                <StyledTableCell data-testid='transaction-table-body-id'>{item.id}</StyledTableCell>
                <StyledTableCell data-testid='transaction-table-body-customer'>
                  {search ? (
                    <>
                      <HightLight query={search}>{item.customer.name}</HightLight> (ID:
                      {item.customer.id})
                    </>
                  ) : (
                    <>
                      {item.customer.name} (ID: {item.customer.id})
                    </>
                  )}
                </StyledTableCell>
                <StyledTableCell>{item.currency}</StyledTableCell>
                <StyledTableCell data-testid='transaction-table-body-datetime'>
                  {item.datetime}
                </StyledTableCell>
                <StyledTableCell data-testid='transaction-table-body-status'>
                  <Typography
                    variant='body2'
                    color={item.status === 'approved' ? 'darkgreen' : 'red'}
                  >
                    {capitalizeFirstLetter(item.status)}
                  </Typography>
                </StyledTableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        component='div'
        count={processedDataArray.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={ROWS_PER_PAGE}
        rowsPerPageOptions={[ROWS_PER_PAGE]}
      />
    </TableContainer>
  );
};

export default TransactionTable;
