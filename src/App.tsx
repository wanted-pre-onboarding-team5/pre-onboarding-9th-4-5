import { Container, Typography } from '@mui/material';
import { useState } from 'react';

import { Pagination } from './components/Pagination';
import { TableList } from './components/TableList';
import { useGetData } from './hooks/useGetData';

const App = () => {
  const { data: getDatas } = useGetData();
  const [currPage, setCurrPage] = useState(1);
  return (
    <>
      {
        <Container maxWidth='lg'>
          <Typography variant='h1' fontWeight='700' color='orange'>
            SwitchOne
          </Typography>
          <TableList getDatas={getDatas} currPage={currPage} />
          <Pagination getDatas={getDatas} currPage={currPage} setCurrPage={setCurrPage} />
        </Container>
      }
    </>
  );
};

export default App;
