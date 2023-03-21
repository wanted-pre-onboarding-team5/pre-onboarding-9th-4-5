import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { TABLE_OPTIONS } from '@/constants';

import FilterSection from '@/components/layouts/FilterSection';
import DataTable from '@/components/public/DataTable';
import Spinner from '@/components/public/Spinner';
import { useFetchOrder } from '@/hooks/useFetchOrder';
import { getToday } from '@/utils/getToday';
import { querySplit } from '@/utils/querySplit';

export interface Filters {
  order?: string;
  orderBy?: string;
  page?: string;
  rowsPerPage?: string;
  status?: string;
  transaction_time?: string;
}

export const Orders = () => {
  const todayDate = getToday();
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = querySplit(searchParams.toString());

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number,
  ) => {
    setSearchParams({ ...filters, page: page.toString() });
  };

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
    const isAsc = searchParams.get('orderBy') === property && searchParams.get('order') === 'asc';
    setSearchParams({ ...filters, order: isAsc ? 'desc' : 'asc', orderBy: property });
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      ...filters,
      rowsPerPage: event.target.value,
      page: TABLE_OPTIONS.defaultPage,
    });
  };

  const {
    data,
    isLoading,
  }: {
    data: [] | undefined;
    isLoading: boolean;
  } = useFetchOrder(filters);

  useEffect(() => {
    setSearchParams({
      order: searchParams.get('order') || TABLE_OPTIONS.defaultOrder,
      orderBy: searchParams.get('orderBy') || TABLE_OPTIONS.defaultOrderBy,
      page: searchParams.get('page') || TABLE_OPTIONS.defaultPage,
      rowsPerPage: searchParams.get('rowsPerPage') || TABLE_OPTIONS.defaultRowPerPage,
      status: searchParams.get('status') || TABLE_OPTIONS.defaultStatus,
      transaction_time: todayDate,
    });
  }, []);

  return (
    <Box sx={{ height: 800 }}>
      <FilterSection />
      {isLoading ? (
        <Spinner />
      ) : (
        <DataTable
          tableDataList={data || []}
          tableOption={{
            ...TABLE_OPTIONS,
            filters,
            handleRequestSort,
            handleChangePage,
            handleChangeRowsPerPage,
          }}
        />
      )}
    </Box>
  );
};
