import { useQuery } from 'react-query';

import { QueryData } from '@/types/queryData';
import { SwitchOneMockAPI } from '@/utils/fetch';

interface mockDataProps {
  mockData: QueryData[];
  transaction_time: string;
}

export const useGetData = () => {
  return useQuery({
    queryKey: ['SwitchOneMockData'],
    queryFn: () => SwitchOneMockAPI(),
    staleTime: 5000,
    // refetchInterval: 5000,
    // refetchIntervalInBackground: true,
    select: (mockDatas) => {
      const data = mockDatas.filter((mockData: mockDataProps) =>
        mockData.transaction_time.includes('2023-03-08'),
      );
      return data;
    },
  });
};
