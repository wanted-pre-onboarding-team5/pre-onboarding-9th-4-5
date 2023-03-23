import type { ResponseData, ResponseObject } from '@/types/responseData';

const dateFilter = (data: ResponseObject, date: string) => {
  const [_date] = data.transaction_time.split(' ');
  return _date === date;
};

const statusFilter = (data: ResponseObject, status: string) => {
  const statusLabel = data.status ? 'completed' : 'proceeding';
  return statusLabel === status;
};

const searchFilter = (data: ResponseObject, search: string) => {
  return data.customer_name
    .toLowerCase()
    .includes(decodeURI(search.replaceAll('+', '%20')).toLowerCase());
};

const descendingComparator = <T>(a: T, b: T, sortBy: keyof T) => {
  if (b[sortBy] < a[sortBy]) {
    return -1;
  }
  if (b[sortBy] > a[sortBy]) {
    return 1;
  }

  return 0;
};

export const processData = (
  rawData: ResponseData,
  filterAndSortOptions: {
    status: string | null;
    datetime: string | null;
    sort: 'id' | 'transaction_time';
    search: string | null;
  },
): ResponseData => {
  const { status, datetime, sort, search } = filterAndSortOptions;

  return rawData
    .filter((data) => {
      const flag1 = status ? statusFilter(data, status) : true;
      const flag2 = datetime ? dateFilter(data, datetime) : true;
      const flag3 = search ? searchFilter(data, search) : true;

      return flag1 && flag2 && flag3;
    })
    .sort((a, b) => descendingComparator(a, b, sort));
};
