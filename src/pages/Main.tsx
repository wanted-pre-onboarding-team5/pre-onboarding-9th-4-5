import { Stack } from '@mui/material';
import { Container } from '@mui/system';

import FilterBox from '@/components/FilterBox';
import TitleWithSearch from '@/components/TitleWithSearch';
import TransactionTable from '@/components/TransactionTable';

const Main = () => {
  return (
    <Container maxWidth='md'>
      <Stack spacing={2} marginTop={4}>
        <TitleWithSearch />
        <FilterBox />
        <TransactionTable />
      </Stack>
    </Container>
  );
};
export default Main;
