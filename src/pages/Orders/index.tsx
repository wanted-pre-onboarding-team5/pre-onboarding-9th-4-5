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
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = querySplit(searchParams.toString());

  useEffect(() => {
    setSearchParams({
      page: 1,
      status: 'all',
      transaction_time: todayDate,
    });
  }, []);

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
      <FilterSection />
      {isLoading ? <Spinner /> : <DataTable tableDataList={data} tableOption={TABLE_OPTIONS} />}
    </Box>
  );
};
