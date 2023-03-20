import { useQuery } from 'react-query';

import { SwitchOneMockAPI } from '@/utils/fetch';

export const useGetData = () => {
  return useQuery({
    queryKey: ['SwitchOneMockData'],
    queryFn: () => SwitchOneMockAPI(),
    select: (mockDatas) =>
      mockDatas.filter((mockData) => mockData.transaction_time.includes('2023-03-08')),
    keepPreviousData: true,
  });
};
