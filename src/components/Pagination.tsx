import { Button, ButtonGroup, Container } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { useGetData } from '@/hooks/useGetData';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({ currentPage, setCurrentPage }: PaginationProps) => {
  const { data: getDatas } = useGetData();
  const [, setParams] = useSearchParams();
  let totalPage;
  let totalPageArray;
  const listPerPage = 50;

  if (getDatas) {
    totalPage = Math.ceil(getDatas?.length / listPerPage);
    totalPageArray = Array(totalPage)
      .fill(undefined)
      .map((_, i) => i);
  }

  const prevPageClick = () => {
    setCurrentPage(currentPage - 1);
    setParams({ page: currentPage - 1 });
  };

  const nextPageClick = () => {
    setCurrentPage(currentPage + 1);
    setParams({ page: currentPage + 1 });
  };

  const currentPageClick = (page) => {
    setCurrentPage(page);
    setParams({ page: page });
  };

  return (
    <Container
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
    >
      <ButtonGroup size='large' color='inherit' style={{ backgroundColor: 'orange' }}>
        <Button onClick={prevPageClick} disabled={currentPage === 1} style={{ color: 'white' }}>
          &lt;
        </Button>
        {totalPageArray?.map((currentPage) => (
          <Button
            key={currentPage}
            onClick={() => currentPageClick(currentPage + 1)}
            style={{ color: 'white' }}
          >
            {currentPage + 1}
          </Button>
        ))}
        <Button
          onClick={nextPageClick}
          disabled={currentPage === totalPage}
          style={{ color: 'white' }}
        >
          &gt;
        </Button>
      </ButtonGroup>
    </Container>
  );
};
