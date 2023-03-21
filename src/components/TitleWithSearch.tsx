import { Typography, Stack, Paper, InputBase, Box, Chip } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const TitleWithSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchInputValue = formData.get('search-input') as string;

    if (searchParams.has('search')) {
      searchParams.delete('search');
    }

    if (searchInputValue) {
      searchParams.append('search', searchInputValue);
    }
    setSearchParams(searchParams);
  };

  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center' marginBottom={8}>
        <Typography variant='h5' fontWeight='bold'>
          Transaction History
        </Typography>
        <Paper
          elevation={0}
          component='form'
          onSubmit={handleSubmit}
          sx={{
            p: '4px 16px',
            display: 'flex',
            alignItems: 'center',
            width: 300,
            backgroundColor: '#f8f8f8',
            border: '1px solid #efefef',
          }}
        >
          <Box>🔍</Box>
          <InputBase
            name='search-input'
            sx={{ ml: 1, flex: 1 }}
            placeholder='Search Customer'
            inputProps={{ 'aria-label': 'search customer' }}
          />
        </Paper>
      </Stack>
      {search && (
        <Chip
          label={`search: ${search}`}
          onDelete={() => {
            searchParams.delete('search');
            setSearchParams(searchParams);
          }}
        />
      )}
    </Box>
  );
};

export default TitleWithSearch;
