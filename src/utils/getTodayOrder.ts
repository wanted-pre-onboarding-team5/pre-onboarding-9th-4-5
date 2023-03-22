import { OrderData } from '@/types/order';

export const getTodayOrder = (data: OrderData[]) =>
  data.filter((res) => res.transaction_time.includes('2023-03-08'));
