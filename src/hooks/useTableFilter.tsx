import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { OrderData } from '@/types/OrderDataType';

export const useTableFilter = (tableData: OrderData[]) => {
  const originalData = tableData;
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentFilter, setCurrentFilter] = useState(searchParams.get('status') || 'all');
  const [filteredData, setFilteredData] = useState(tableData);
  const [searchInputValue, setSearchInputValue] = useState('');

  const filterDataByStatus = (status: string | null) => {
    if (status === 'all' || status === null) {
      return originalData;
    }

    return originalData.filter((order) => {
      return order.status === (status === 'true' ? true : false);
    });
  };

  const filterDataByCustomerName = (customerName: string | null) => {
    if (!customerName) {
      return originalData;
    }
    return originalData.filter((order) => {
      return order.customer_name.includes(customerName);
    });
  };

  useEffect(() => {
    const orderStatus = searchParams.get('status');
    if (orderStatus) {
      const filteredOrderData = filterDataByStatus(orderStatus);
      setFilteredData(filteredOrderData);
      return;
    }

    const customerName = searchParams.get('customer_name') || '';
    const searchResult = filterDataByCustomerName(customerName);
    setFilteredData(searchResult);
    setCurrentFilter('all');
  }, [setSearchParams, searchParams]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFilter = e.target.value;
    setCurrentFilter(selectedFilter);
    setSearchParams({ status: selectedFilter });
  };

  const handleSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const customerName = e.target.value;
    setSearchInputValue(customerName);
    setSearchParams({ customer_name: customerName });
  };

  return {
    currentFilter,
    handleFilterChange,
    filteredData,
    handleSearchBarChange,
    searchInputValue,
  };
};
