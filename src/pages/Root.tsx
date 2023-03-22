import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';

const Root = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Root;
