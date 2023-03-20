import { Stack } from '@mui/material';

import DateFilter from './DateFilter';
import StatusFilter from './StatusFilter';

const FilterBox = () => {
  return (
    <Stack direction='row' justifyContent='space-between'>
      <DateFilter />
      <StatusFilter />
    </Stack>
  );
};

export default FilterBox;
