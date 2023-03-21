import { TRANSACTION_TIME_DISPLAY } from '@/constants';
import { fetchData } from '@/utils';

import { OrderData } from '@/types/OrderDataType';

export const rootLoader = async () => {
  const orderData = (await fetchData('/data.json')) as OrderData[];

  const filteredOrderData = orderData.filter((order) => {
    const orderTime = new Date(order.transaction_time);
    const orderYear = orderTime.getFullYear();
    const orderMonth = orderTime.getMonth();
    const orderDate = orderTime.getDate();
    return (
      orderYear === TRANSACTION_TIME_DISPLAY.year &&
      orderMonth === TRANSACTION_TIME_DISPLAY.month &&
      orderDate === TRANSACTION_TIME_DISPLAY.date
    );
  });

  return filteredOrderData;
};
