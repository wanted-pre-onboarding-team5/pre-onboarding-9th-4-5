import { Container } from '@mui/material';
import { Suspense } from 'react';

import { OrderTable } from '@/components/OrderTable';

export const Root = () => {
  return (
    <Container fixed>
      <Suspense fallback={<div>loading</div>}>
        <OrderTable />
      </Suspense>
    </Container>
  );
};
