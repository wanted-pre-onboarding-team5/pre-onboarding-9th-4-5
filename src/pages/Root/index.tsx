import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from '@/components/layouts/Header';

const Root = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Root;
