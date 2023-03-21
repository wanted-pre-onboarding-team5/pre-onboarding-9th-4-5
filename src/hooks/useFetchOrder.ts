import { UseQueryOptions, useQuery } from 'react-query';

import { fetchOrder } from '@/helpers/fetchOrder';
import { SwitchOneApi } from '@/types/responseData';
export const useFetchOrder = (
  filters: SwitchOneApi,
  options?: Omit<UseQueryOptions<unknown, unknown, unknown>, 'queryKey'>,
) => useQuery(['fetchOrder', filters], () => fetchOrder(filters), options);
