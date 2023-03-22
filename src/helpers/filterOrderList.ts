import { SwitchOneApi } from '@/types/responseData';

export const filterOrderList = (orderList: SwitchOneApi[], filters: SwitchOneApi) => {
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
      ? order.customer_name
          ?.toLowerCase()
          .includes(decodeURI(filters.customer_name.replaceAll('+', '%20')).toLowerCase())
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
