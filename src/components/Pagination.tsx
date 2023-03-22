import { Stack, Button } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const hasPrevPage = currentPage <= 1;

  const hasNextPage = currentPage >= totalPages;

  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const handlePageClick = (page: number) => () => {
    onPageChange(page);
  };

  return (
    <Stack spacing={2}>
      <Button isDisabled={hasPrevPage} onClick={handlePrevPage}>
        이전
      </Button>
      {Array.from({ length: totalPages }, (_, i) => (
        <Button
          key={i}
          variant={i + 1 === currentPage ? 'solid' : 'ghost'}
          onClick={handlePageClick(i + 1)}
        >
          {i + 1}
        </Button>
      ))}
      <Button isDisabled={hasNextPage} onClick={handleNextPage}>
        다음
      </Button>
    </Stack>
  );
};
