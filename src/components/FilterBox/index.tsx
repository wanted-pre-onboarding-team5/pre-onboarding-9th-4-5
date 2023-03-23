import { Stack, Box } from '@mui/material';

import DateFilter from './DateFilter';
import SearchFilter from './SearchFilter';
import StatusFilter from './StatusFilter';

const FilterBox = () => {
  return (
    <Stack direction='row' justifyContent='space-between' spacing={2}>
      <DateFilter />
      <SearchFilter />
      <Box flex={1} />
      <StatusFilter />
    </Stack>
  );
};

export default FilterBox;
