import type { ResponseData, TransformedData, TransformedObject } from '@/types/responseData';

const dateFilterFn = (data: TransformedObject, date: string) => {
  const [_date] = data.datetime.split(' ');
  return _date === date;
};

const statusFilterFn = (data: TransformedObject, status: string) => {
  return data.status === status;
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

const transformRawData = (rawData: ResponseData): TransformedData =>
  rawData.map((data) => ({
    id: data.id,
    customer: { name: data.customer_name, id: data.customer_id },
    currency: data.currency,
    datetime: data.transaction_time,
    status: data.status ? 'approved' : 'rejected',
  }));

export const processData = (
  rawData: ResponseData,
  filterAndSortOptions: {
    status: string | null;
    datetime: string | null;
    sort: 'id' | 'datetime';
  },
): TransformedData => {
  const { status, datetime, sort } = filterAndSortOptions;
  const transformedData = transformRawData(rawData);

  return transformedData
    .filter((data) => {
      let flag1 = true;
      let flag2 = true;
      if (status) {
        flag1 = statusFilterFn(data, status);
      }
      if (datetime) {
        flag2 = dateFilterFn(data, datetime);
      }
      return flag1 && flag2;
    })
    .sort((a, b) => descendingComparator(a, b, sort));
};
