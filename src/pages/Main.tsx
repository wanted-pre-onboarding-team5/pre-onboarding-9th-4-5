import { Container } from '@mui/material';

import { OrderListTable, OrderListForm } from '@/components';

export const Main = () => {
  return (
    <Container>
      <OrderListForm />
      <OrderListTable />
    </Container>
  );
};
