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
  const [firstname, lastname] = data.customer_name.split(' ');
  const lowerCased = search.toLowerCase();

  return (
    firstname.toLowerCase().includes(lowerCased) || lastname.toLowerCase().includes(lowerCased)
  );
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
      let flag1 = true;
      let flag2 = true;
      let flag3 = true;
      if (status) {
        flag1 = statusFilter(data, status);
      }
      if (datetime) {
        flag2 = dateFilter(data, datetime);
      }
      if (search) {
        flag3 = searchFilter(data, search);
      }
      return flag1 && flag2 && flag3;
    })
    .sort((a, b) => descendingComparator(a, b, sort));
};
