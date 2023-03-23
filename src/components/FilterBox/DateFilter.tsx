import { Button } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const DateFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    setSearchParams({ datetime: '2023-03-08' });
  }, []);

  return (
    <Button variant='outlined' disabled>
      📆 {searchParams.get('datetime')}
    </Button>
  );
};

export default DateFilter;
