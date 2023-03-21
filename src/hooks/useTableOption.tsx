import { useState } from 'react';

import { DEFAULT_DATA_ROW_COUNT } from '@/constants';
import { AscOrDesc } from '@/utils';

import { OrderDataKey } from '@/types/OrderDataType';

export const useTableOption = () => {
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_DATA_ROW_COUNT);
  const [ascOrDesc, setAscOrDesc] = useState<AscOrDesc>('asc');
  const [orderBy, setOrderBy] = useState<OrderDataKey>('id');

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: OrderDataKey) => {
    const isAsc = orderBy === property && ascOrDesc === 'asc';
    setAscOrDesc(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return {
    page,
    dense,
    ascOrDesc,
    orderBy,
    rowsPerPage,
    handleChangePage,
    handleChangeDense,
    handleChangeRowsPerPage,
    handleRequestSort,
  };
};
