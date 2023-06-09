import { Stack } from '@mui/material';
import { Container } from '@mui/system';

import FilterBox from '@/components/FilterBox';
import TableTitle from '@/components/TableTitle';
import TransactionTable from '@/components/TransactionTable';
import useIntervalRevalidate from '@/hooks/useIntervalRevalidate';

const Main = () => {
  useIntervalRevalidate(5000);

  return (
    <Container maxWidth='md'>
      <Stack spacing={2} marginTop={4}>
        <TableTitle />
        <FilterBox />
        <TransactionTable />
      </Stack>
    </Container>
  );
};
export default Main;
