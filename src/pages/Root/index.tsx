import { Typography } from '@mui/material';
import { useState } from 'react';

import { TableList, Pagination } from '@/components';

import { useGetData } from '@/hooks/useGetData';

export function Root() {
  const { data: getDatas } = useGetData();
  const [currPage, setCurrPage] = useState(1);
  return (
    <div>
      <Typography variant='h1' fontWeight='700' color='orange'>
        SwitchOne
      </Typography>
      <TableList getDatas={getDatas} currPage={currPage} />
      <Pagination getDatas={getDatas} currPage={currPage} setCurrPage={setCurrPage} />
    </div>
  );
}
