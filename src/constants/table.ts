export const TABLE_HEAD_CONTEXT = [
  { field: 'id', label: 'Order ID', isSortPosssible: true },
  { field: 'customer_name', label: 'Customer Name', isSortPosssible: false },
  { field: 'customer_id', label: 'Customer ID', isSortPosssible: false },
  { field: 'currency', label: 'Currency', isSortPosssible: false },
  { field: 'transaction_time', label: 'DateTime', isSortPosssible: true },
  { field: 'status', label: 'Status', isSortPosssible: false },
] as const;

export const ROWS_PER_PAGE = 50;
