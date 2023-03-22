import { API_PATH } from '@/constants';

import { filterOrderList } from './filterOrderList';

import { SwitchOneApi } from '@/types/responseData';
import { httpClient } from '@/utils/httpClient';

export const fetchOrder = async (filters: SwitchOneApi) => {
  const orderList: SwitchOneApi[] = await httpClient(API_PATH.data);
  const filteredOrderList = filterOrderList(orderList, filters);
  return filteredOrderList;
};
