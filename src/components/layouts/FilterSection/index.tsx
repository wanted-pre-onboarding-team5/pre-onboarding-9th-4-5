import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { FILTER_STATUS } from '@/constants';

import FilterRadios from './FilterRadios';
import SearchField from './SearchField';

import { querySplit } from '@/utils/querySplit';

const FilterSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = querySplit(searchParams.toString());

  const handleStatus = (event: React.MouseEvent<HTMLElement>, status: string) => {
    setSearchParams({ ...filters, page: '0', status });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
      }}
    >
      <FilterRadios radios={FILTER_STATUS} filters={searchParams} handleStatus={handleStatus} />
      <SearchField />
    </Box>
  );
};

export default FilterSection;
