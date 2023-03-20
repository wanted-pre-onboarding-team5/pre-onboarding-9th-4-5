import { Button, ButtonGroup, Container } from '@mui/material';

import { QueryData } from '@/types/queryData';

interface PaginationProps {
  getDatas: QueryData[];
  currPage: React.Dispatch<React.SetStateAction<number>>;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({ getDatas, currPage, setCurrPage }: PaginationProps) => {
  let totalPage;
  let totalPageArray;
  const listPerPage = 50;

  if (getDatas) {
    totalPage = Math.ceil(getDatas?.length / listPerPage);
    totalPageArray = Array(totalPage)
      .fill(undefined)
      .map((_, i) => i);
  }

  return (
    <Container
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
    >
      <ButtonGroup size='large' color='inherit' style={{ backgroundColor: 'orange' }}>
        <Button
          onClick={() => setCurrPage(currPage - 1)}
          disabled={currPage === 1}
          style={{ color: 'white' }}
        >
          &lt;
        </Button>
        {totalPageArray?.map((page) => (
          <Button key={page} onClick={() => setCurrPage(page + 1)} style={{ color: 'white' }}>
            {page + 1}
          </Button>
        ))}
        <Button
          onClick={() => setCurrPage(currPage + 1)}
          disabled={currPage === totalPage}
          style={{ color: 'white' }}
        >
          &gt;
        </Button>
      </ButtonGroup>
    </Container>
  );
};
