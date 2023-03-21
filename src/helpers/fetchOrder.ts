import { API_PATH } from '@/constants';

import { SwitchOneApi } from '@/types/responseData';
import { httpClient } from '@/utils/httpClient';

export const fetchOrder = async (filters: SwitchOneApi) => {
  const orderList: SwitchOneApi[] = await httpClient(API_PATH.data);
  return orderList.reduce((acc, order) => {
    const idCondition = filters.id ? order.id === filters.id : true;
    const timeCondition = filters.transaction_time
      ? order.transaction_time?.includes(filters.transaction_time)
      : true;
    const statusCondition =
      filters.status !== 'all' ? String(order.status) === filters.status : true;
    const customerIdCondition = filters.customer_id
      ? order.customer_id === filters.customer_id
      : true;
    const customerNameCondition = filters.customer_name
      ? order.customer_name?.includes(filters.customer_name)
      : true;

    if (
      idCondition &&
      timeCondition &&
      statusCondition &&
      customerIdCondition &&
      customerNameCondition
    ) {
      acc.push(order);
    }
    return acc;
  }, []);
};
