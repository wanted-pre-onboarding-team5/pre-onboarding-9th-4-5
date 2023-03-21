import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Spinner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        paddingTop: 15,
      }}
    >
      <CircularProgress
        variant='determinate'
        sx={{
          color: (theme) => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={100}
        thickness={4}
        value={100}
      />
      <CircularProgress
        variant='indeterminate'
        disableShrink
        sx={{
          color: (theme) => (theme.palette.mode === 'light' ? '#F7941C' : '#d28d38'),
          animationDuration: '550ms',
          position: 'absolute',
        }}
        size={100}
        thickness={4}
      />
    </Box>
  );
};

export default Spinner;
