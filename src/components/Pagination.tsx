import { Button, ButtonGroup, Container } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { QueryData } from '@/types/queryData';

interface PaginationProps {
  getDatas: QueryData[];
  currPage: number;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({ getDatas, currPage, setCurrPage }: PaginationProps) => {
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
    setCurrPage(currPage - 1);
    setParams({ page: currPage - 1 });
  };

  const nextPageClick = () => {
    setCurrPage(currPage + 1);
    setParams({ page: currPage + 1 });
  };

  const currentPageClick = (page) => {
    setCurrPage(page);
    setParams({ page: page });
  };

  return (
    <Container
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
    >
      <ButtonGroup size='large' color='inherit' style={{ backgroundColor: 'orange' }}>
        <Button onClick={prevPageClick} disabled={currPage === 1} style={{ color: 'white' }}>
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
          disabled={currPage === totalPage}
          style={{ color: 'white' }}
        >
          &gt;
        </Button>
      </ButtonGroup>
    </Container>
  );
};
