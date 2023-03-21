export const TRANSACTION_TIME_DISPLAY = {
  year: 2023,
  month: 2, // March
  date: 8,
} as const;

export const DEFAULT_DATA_ROW_COUNT = 50;

interface OrderTableColumn {
  id: 'id' | 'transaction_time' | 'status' | 'customer_id' | 'customer_name' | 'currency';
  label: string;
  minWidth?: number;
  align?: 'right';
  hasSortLabel?: boolean;
}

export const ORDER_TABLE_COLUMNS: readonly OrderTableColumn[] = [
  {
    id: 'id',
    label: '주문 번호',
    minWidth: 50,
    hasSortLabel: true,
  },
  {
    id: 'transaction_time',
    label: '거래 날짜 및 시간',
    minWidth: 100,
    hasSortLabel: true,
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
  {
    id: 'status',
    label: '주문 처리 상태',
    minWidth: 100,
    align: 'right',
  },
];

export const ORDER_TABLE_FILTER_OPTIONS = [
  { value: 'all', label: 'ALL', color: '#90939981' },
  { value: 'true', label: '✅', color: '#67c23a96' },
  { value: 'false', label: '❌', color: '#f56c6c97' },
] as const;
