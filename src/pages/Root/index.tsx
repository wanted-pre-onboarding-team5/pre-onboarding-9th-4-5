import { Typography } from '@mui/material';
import { useState } from 'react';

import { TableList, Pagination } from '@/components';

import { SearchName } from '@/components/SearchName';

export function Root() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <Typography variant='h1' fontWeight='700' color='orange'>
        SwitchOne
      </Typography>

      <SearchName />
      <TableList currentPage={currentPage} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
