import { TableBody, TableRow, Typography } from '@mui/material';
import React from 'react';

import StyledTableCell from './StyledTableCell';

import type { TransformedData } from '@/types/responseData';

import { ROWS_PER_PAGE } from '@/constants/table';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

type HighlightProps = {
  query: string;
  children: string;
};

const Highlight = ({ children, query }: HighlightProps) => {
  const parts = children.split(new RegExp(`(${query})`, 'gi'));

  return (
    <Typography component='span' variant='body2'>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <Typography component='mark' key={index}>
            {part}
          </Typography>
        ) : (
          part
        ),
      )}
    </Typography>
  );
};

type TransactionTableBodyProps = {
  page: number;
  processedData: TransformedData;
  search: string | null;
};

const TransactionTableBody = ({ page, processedData, search }: TransactionTableBodyProps) => {
  return (
    <TableBody data-testid='transaction-table-body'>
      {processedData
        .slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)
        .map((item) => (
          <TableRow key={item.id}>
            <StyledTableCell data-testid='transaction-table-body-id'>{item.id}</StyledTableCell>
            <StyledTableCell data-testid='transaction-table-body-customer'>
              {search ? (
                <>
                  <Highlight query={search}>{item.customer.name}</Highlight> (ID:
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
              <Typography variant='body2' color={item.status === 'approved' ? 'darkgreen' : 'red'}>
                {capitalizeFirstLetter(item.status)}
              </Typography>
            </StyledTableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};

export default TransactionTableBody;
