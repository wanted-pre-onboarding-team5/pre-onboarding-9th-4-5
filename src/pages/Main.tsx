import { Box } from '@mui/material';

import { OrderListTable } from '@/components/OrderListTable';
import { StatusSelect } from '@/components/StatusSelect';

export const Main = () => {
  return (
    <>
      <Box display='flex' justifyContent='end' my={5}>
        <StatusSelect />
      </Box>
      <OrderListTable />
    </>
  );
};
