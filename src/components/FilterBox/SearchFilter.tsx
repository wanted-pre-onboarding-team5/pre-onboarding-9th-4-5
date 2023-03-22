import { Paper, InputBase, Typography } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = React.useState('');
  //   const search = searchParams.get('search');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchParams.has('search')) {
      searchParams.delete('search');
    }

    if (searchInput) {
      searchParams.append('search', searchInput);
    }
    setSearchParams(searchParams);
  };

  return (
    <Paper
      elevation={0}
      component='form'
      onSubmit={handleSubmit}
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
        onChange={(event) => setSearchInput(event.target.value)}
        name='search-input'
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search Customer'
        inputProps={{ 'aria-label': 'search-customer' }}
      />
    </Paper>
  );
};

export default SearchFilter;
