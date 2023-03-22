import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, IconButton, Stack } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { orderApiQueryKey, PAGINATION_PER_PAGE } from '@/constants';

export const TablePagination = ({ totalCount }: { totalCount: number }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumbers = Array(Math.ceil(totalCount / PAGINATION_PER_PAGE))
    .fill(0)
    .map((_, i) => (i + 1).toString());

  const paginate = (pageNumber: string) => {
    searchParams.set(orderApiQueryKey.PAGE, pageNumber);
    setSearchParams(searchParams);
  };

  return (
    <Stack direction='row' spacing={2} alignContent='center' justifyContent='center' mt={2} mb={10}>
      <IconButton
        aria-label='previous button'
        onClick={() => paginate(String(Number(pageNumbers) - 1))}
        disabled={Number(pageNumbers) === 1}
      >
        <ArrowBackIcon />
      </IconButton>
      {pageNumbers.map((pageNumber, i) => (
        <Button
          key={pageNumber}
          onClick={() => paginate(pageNumber)}
          aria-label={Number(pageNumber) === i + 1 ? 'current page' : 'page'}
          variant={Number(pageNumber) === i + 1 ? 'text' : 'outlined'}
        >
          {pageNumber}
        </Button>
      ))}
      <IconButton
        aria-label='next button'
        onClick={() => paginate(String(Number(pageNumbers) - 1))}
        disabled={Number(pageNumbers) === totalCount}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Stack>
  );
};
