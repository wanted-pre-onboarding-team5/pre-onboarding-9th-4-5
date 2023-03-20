import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  tableCellClasses,
  TablePagination,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

import type { ResponseData } from '@/types/responseData';

import { TABLE_HEAD_CONTEXT, ROWS_PER_PAGE } from '@/constants/table';

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

  const loaderData = useLoaderData() as ResponseData;

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
            {TABLE_HEAD_CONTEXT.map((item) => (
              <StyledTableCell key={item.field} size='small'>
                {item.label}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {loaderData
            .slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)
            .map((item) => (
              <TableRow key={item.id}>
                <StyledTableCell>{item.id}</StyledTableCell>
                <StyledTableCell>
                  {item.customer_name} (ID: {item.customer_id})
                </StyledTableCell>
                <StyledTableCell>{item.currency}</StyledTableCell>
                <StyledTableCell>{item.transaction_time}</StyledTableCell>
                <StyledTableCell>
                  <Typography variant='body2' color={item.status ? 'darkgreen' : 'red'}>
                    {item.status ? 'approved' : 'rejected'}
                  </Typography>
                </StyledTableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        component='div'
        count={loaderData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={ROWS_PER_PAGE}
        rowsPerPageOptions={[ROWS_PER_PAGE]}
      />
    </TableContainer>
  );
};

export default TransactionTable;
