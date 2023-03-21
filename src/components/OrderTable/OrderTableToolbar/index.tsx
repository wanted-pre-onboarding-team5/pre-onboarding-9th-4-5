import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { OrderTableFilter } from './OrderTableFilter';

export const OrderTableToolbar = ({ setSearchParams }) => {
  const [searchParams] = useSearchParams();
  const [currentFilter, setCurrentFilter] = useState<string>(searchParams.get('status') || 'all');

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFilter = e.target.value;
    setCurrentFilter(selectedFilter);
    setSearchParams({ status: selectedFilter });
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography sx={{ flex: '1 1 100%' }} variant='h5' id='tableTitle' component='div'>
        Order Table
      </Typography>
      <OrderTableFilter onChange={handleFilterChange} currentFilter={currentFilter} />
    </Toolbar>
  );
};
