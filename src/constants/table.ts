const HEAD_CELLS = [
  {
    id: 'transaction_time',
    align: 'center',
    disablePadding: false,
    label: '거래일 & 거래시간',
    style: { width: '150px' },
  },
  {
    id: 'id',
    align: 'center',
    disablePadding: false,
    label: '주문번호',
    style: { width: '90px' },
  },
  {
    id: 'customer_id',
    align: 'center',
    disablePadding: false,
    label: '고객번호',
    style: { width: '90px' },
  },
  {
    id: 'customer_name',
    align: 'left',
    disablePadding: false,
    label: '고객이름',
    style: { fontWeight: 700 },
  },
  {
    id: 'currency',
    align: 'center',
    disablePadding: false,
    label: '가격',
    style: { width: '90px' },
  },
  {
    id: 'status',
    align: 'center',
    disablePadding: false,
    label: '처리상태',
    style: { width: '90px' },
  },
] as const;

export const FILTER_STATUS = {
  label: '처리상태',
  name: 'status',
  options: [
    { label: '전체', value: 'all' },
    { label: '처리중', value: 'true' },
    { label: '처리완료', value: 'false' },
  ],
} as const;

export const DEFAULT_DATA_ROW_COUNT = 50;

export const TABLE_OPTIONS = {
  defaultOrder: 'asc',
  defaultOrderBy: 'id',
  defaultDataRowCount: 50,
  headerCells: HEAD_CELLS,
};
