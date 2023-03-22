import { Box } from '@mui/material';

import FilterRadios from './FilterRadios';
import SearchField from './SearchField';

const FilterSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
      }}
    >
      <FilterRadios />
      <SearchField />
    </Box>
  );
};

export default FilterSection;
