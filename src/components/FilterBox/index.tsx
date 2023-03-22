import { Stack, Box } from '@mui/material';

import DateFilter from './DateFilter';
import SearchFilter from './SearchFilter';
import StatusFilter from './StatusFilter';

const FilterBox = () => {
  return (
    <Stack direction='row' justifyContent='space-between'>
      <SearchFilter />
      <Box flex={1} />
      <DateFilter />
      <StatusFilter />
    </Stack>
  );
};

export default FilterBox;
