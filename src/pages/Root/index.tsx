import { Typography } from '@mui/material';
import { useState } from 'react';

import { TableList, Pagination } from '@/components';

import { useGetData } from '@/hooks/useGetData';

export function Root() {
  const { data: getDatas } = useGetData();
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <Typography variant='h1' fontWeight='700' color='orange'>
        SwitchOne
      </Typography>
      <TableList getDatas={getDatas} currentPage={currentPage} />
      <Pagination getDatas={getDatas} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
