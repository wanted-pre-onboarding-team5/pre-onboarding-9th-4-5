export const TRANSACTION_TIME_DISPLAY = {
  year: 2023,
  month: 2, // March
  date: 8,
} as const;

// table
export const DEFAULT_DATA_ROW_COUNT = 50;

interface Column {
  id: 'id' | 'transaction_time' | 'status' | 'customer_id' | 'customer_name' | 'currency';
  label: string;
  minWidth?: number;
  align?: 'right';
}

export const ORDER_TABLE_COLUMNS: readonly Column[] = [
  { id: 'id', label: '주문 번호', minWidth: 50 },
  { id: 'transaction_time', label: '거래 날짜 및 시간', minWidth: 100 },
  {
    id: 'status',
    label: '주문 처리 상태',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'customer_id',
    label: '고객 번호',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'customer_name',
    label: '고객 이름',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'currency',
    label: '가격',
    minWidth: 170,
    align: 'right',
  },
];
