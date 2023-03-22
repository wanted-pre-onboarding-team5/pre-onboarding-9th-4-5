import { GridPaginationModel } from '@mui/x-data-grid';
import queryString from 'query-string';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import { OrderData } from '@/types';

import { getOrderData } from '@/api/order';

export const useOrderData = () => {
  const { data } = useQuery(['orderList'], getOrderData, {
    refetchInterval: 5000,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const params = queryString.parse(searchParams.toString());

  let orderData = data.filter((order: OrderData) => order.transaction_time.includes('2023-03-08'));

  if (params.status) {
    orderData = orderData.filter((order: OrderData) =>
      params.status === 'all' ? true : params.status === 'true' ? order.status : !order.status,
    );
  }

  if (params.name) {
    orderData = orderData.filter((order: OrderData) =>
      order.customer_name.toLocaleLowerCase().includes((params.name as string).toLocaleLowerCase()),
    );
  }

  const handlePagenation = (model: GridPaginationModel) => {
    const newParams = { ...params, page: model.page + 1 };
    setSearchParams(queryString.stringify(newParams));
  };

  return { orderData, page: Number(params.page) - 1 || 0, handlePagenation };
};
