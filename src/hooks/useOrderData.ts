import { GridPaginationModel } from '@mui/x-data-grid';
import queryString from 'query-string';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import { OrderData } from '@/types';

export const useOrderData = () => {
  const { data } = useQuery(['orderList'], async () => {
    const response = await fetch('/mock_data.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const params = queryString.parse(searchParams.toString());

  const orderData = data.filter((order: OrderData) =>
    order.transaction_time.includes('2023-03-08'),
  );

  const handlePagenation = (model: GridPaginationModel) => {
    const newParams = { ...params, page: model.page + 1 };
    setSearchParams(queryString.stringify(newParams));
  };

  return { orderData, page: Number(params.page) - 1 || 0, handlePagenation };
};
