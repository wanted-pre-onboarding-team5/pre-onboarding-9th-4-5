import { Paper, InputBase, Typography } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDebounce } from '@/hooks/useDebounce';

const SearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = React.useState('');
  const debouncedSearchInput = useDebounce({ value: searchInput, delay: 250 });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  React.useEffect(() => {
    if (searchParams.has('search')) {
      searchParams.delete('search');
    }

    if (searchInput) {
      searchParams.append('search', debouncedSearchInput);
    }
    setSearchParams(searchParams);
  }, [debouncedSearchInput]);

  return (
    <Paper
      elevation={0}
      component='div'
      sx={{
        p: '4px 16px',
        display: 'flex',
        alignItems: 'center',
        width: 250,
        backgroundColor: '#f8f8f8',
        border: '1px solid #efefef',
      }}
    >
      <Typography component='span'>🔍</Typography>
      <InputBase
        value={searchInput}
        onChange={handleInputChange}
        name='search-input'
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search Customer'
        inputProps={{ 'aria-label': 'search-customer' }}
      />
    </Paper>
  );
};

export default SearchFilter;
