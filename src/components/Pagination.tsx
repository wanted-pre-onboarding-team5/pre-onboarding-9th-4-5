import { Button, ButtonGroup, Container } from '@mui/material';

export const Pagination = ({ getDatas, currPage, setCurrPage }) => {
  let totalPage;
  let totalPageArray;
  const listPerPage = 50;

  if (getDatas) {
    totalPage = Math.ceil(getDatas?.length / listPerPage);
    totalPageArray = Array(totalPage)
      .fill()
      .map((_, i) => i);
  }

  return (
    <Container
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
    >
      <ButtonGroup size='large'>
        <Button onClick={() => setCurrPage(currPage - 1)} disabled={currPage === 1}>
          &lt;
        </Button>
        {totalPageArray?.map((page) => (
          <Button key={page} onClick={() => setCurrPage(page + 1)}>
            {page + 1}
          </Button>
        ))}
        <Button onClick={() => setCurrPage(currPage + 1)} disabled={currPage === totalPage}>
          &gt;
        </Button>
      </ButtonGroup>
    </Container>
  );
};
