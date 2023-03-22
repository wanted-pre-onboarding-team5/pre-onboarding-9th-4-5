import { fetchData } from '@/utils/fetch';
import { getTodayOrder } from '@/utils/getTodayOrder';

export const mainLoader = async () => {
  const data = await fetchData('/data.json');

  return getTodayOrder(data);
};
