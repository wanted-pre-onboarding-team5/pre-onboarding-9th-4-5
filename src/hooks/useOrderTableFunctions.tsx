import { useSearchParams } from 'react-router-dom';

import { orderApiQueryKey } from '@/constants';

import { SortType, StatusType } from '@/types/props';

export const useOrderTableFunctions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get(orderApiQueryKey.SORT) as SortType;
  const status = searchParams.get(orderApiQueryKey.STATUS) as StatusType;

  const sortById = () => {
    switch (sort) {
      case 'ID_DES':
        searchParams.set(orderApiQueryKey.SORT, 'ID_ASC');
        break;
      case 'ID_ASC':
        searchParams.delete(orderApiQueryKey.SORT);
        break;
      default:
        searchParams.set(orderApiQueryKey.SORT, 'ID_DES');
    }
    setSearchParams(searchParams);
  };

  const sortByTime = () => {
    switch (sort) {
      case 'TIME_DES':
        searchParams.set(orderApiQueryKey.SORT, 'TIME_ASC');
        break;
      case 'TIME_ASC':
        searchParams.delete(orderApiQueryKey.SORT);
        break;
      default:
        searchParams.set(orderApiQueryKey.SORT, 'TIME_DES');
    }
    setSearchParams(searchParams);
  };

  const filterByStatus = () => {
    switch (status) {
      case 'FALSE':
        searchParams.set(orderApiQueryKey.STATUS, 'TRUE');
        searchParams.delete(orderApiQueryKey.PAGE);
        break;
      case 'TRUE':
        searchParams.delete(orderApiQueryKey.STATUS);
        break;
      default:
        searchParams.set(orderApiQueryKey.STATUS, 'FALSE');
        searchParams.delete(orderApiQueryKey.PAGE);
    }
    setSearchParams(searchParams);
  };

  const filterBySearch = (search: string) => {
    searchParams.set(orderApiQueryKey.SEARCH, search);
    searchParams.delete(orderApiQueryKey.PAGE);
    setSearchParams(searchParams);
  };

  return { sortById, sortByTime, filterByStatus, filterBySearch };
};
