export interface OrderData {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

export type OrderDataKey = keyof OrderData;

export type AscOrDesc = 'asc' | 'desc';

export interface TableSortProps {
  ascOrDesc: AscOrDesc;
  orderBy: OrderDataKey;
}
