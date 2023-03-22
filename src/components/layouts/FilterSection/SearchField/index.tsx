import { Stack, TextField } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { querySplit } from '@/utils/querySplit';

const SearchField = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = querySplit(searchParams.toString());

  const searchCustomerName = (customerName: string) => {
    setSearchParams({ ...filters, page: 0, customer_name: customerName });
  };

  return (
    <Stack sx={{ margin: 1, display: 'flex', alignItems: 'flex-end' }} direction='row' spacing={1}>
      <TextField
        color='warning'
        id='standard-search'
        label='고객 이름으로 찾기'
        type='search'
        variant='standard'
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          searchCustomerName(event.target.value);
        }}
      />
    </Stack>
  );
};

export default SearchField;
