import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { OrderData } from '@/types/OrderDataType';

export const useTableFilter = (tableData: OrderData[]) => {
  const originalData = tableData;
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentFilter, setCurrentFilter] = useState(searchParams.get('status') || 'all');
  const [filteredData, setFilteredData] = useState(tableData);

  const filterDataByStatus = (status: string | null) => {
    if (status === 'all' || status === null) {
      return originalData;
    }

    return originalData.filter((order) => {
      return order.status === (status === 'true' ? true : false);
    });
  };

  useEffect(() => {
    const orderStatus = searchParams.get('status');
    const filteredOrderData = filterDataByStatus(orderStatus);
    setFilteredData(filteredOrderData);
  }, [setSearchParams, searchParams]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFilter = e.target.value;
    setCurrentFilter(selectedFilter);
    setSearchParams({ status: selectedFilter });
  };

  return {
    currentFilter,
    handleFilterChange,
    filteredData,
  };
};
