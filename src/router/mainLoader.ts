import { fetchData } from '@/utils/fetch';

export const mainLoader = async () => {
  const data = await fetchData('/data.json');

  return data;
};
