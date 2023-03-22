import { Typography } from '@mui/material';
import { useState } from 'react';

import { TableList, Pagination } from '@/components';

import { SearchName } from '@/components/SearchName';

export function Root() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResult, setSearchResult] = useState();
  return (
    <div>
      <Typography variant='h1' fontWeight='700' color='orange'>
        SwitchOne
      </Typography>

      <SearchName setSearchResult={setSearchResult} />
      <TableList currentPage={currentPage} searchResult={searchResult} />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
