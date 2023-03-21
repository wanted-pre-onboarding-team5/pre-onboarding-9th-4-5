import { Dispatch } from 'react';

export interface OrderProps {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

export interface Pagination {
  total: number;
  limit: number;
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
}

export type SortType = 'ID_DES' | 'ID_ASC' | 'TIME_DES' | 'TIME_ASC';

export type StatusType = 'TRUE' | 'FALSE';
