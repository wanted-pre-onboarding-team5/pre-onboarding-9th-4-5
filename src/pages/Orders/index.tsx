import { Box } from '@mui/material';
import { useState } from 'react';

import { TABLE_OPTIONS, FILTER_STATUS } from '@/constants';

import DataTable from '@/components/public/DataTable';
import FilterRadios from '@/components/public/FilterRadios';
import Spinner from '@/components/public/Spinner';
import { useFetchOrder } from '@/hooks/useFetchOrder';
import { getToday } from '@/utils/getToday';

interface SwitchOneApi {
  id?: number;
  transaction_time?: string;
  status?: boolean;
  customer_id?: number;
  customer_name?: string;
  currency?: string;
}

export const Orders = () => {
  const todayDate = getToday();
  const [filters, setFilters] = useState({ transaction_time: todayDate, status: 'all' });

  const handleStatus = (event: React.MouseEvent<HTMLElement>, status: string) => {
    setFilters({ ...filters, status });
  };

  const {
    data,
    isLoading,
  }: {
    data: SwitchOneApi[] | undefined;
    isLoading: boolean;
    error: boolean | null;
  } = useFetchOrder(filters);

  return (
    <Box sx={{ height: 800 }}>
      <FilterRadios radios={FILTER_STATUS} filters={filters} handleStatus={handleStatus} />
      {isLoading ? <Spinner /> : <DataTable tableDataList={data} tableOption={TABLE_OPTIONS} />}
    </Box>
  );
};
