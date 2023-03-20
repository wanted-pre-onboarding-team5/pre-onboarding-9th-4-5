export const TABLE_HEAD_CONTEXT = [
  { field: 'id', label: 'ID', isSortPosssible: true },
  { field: 'customer', label: 'Customer', isSortPosssible: false },
  { field: 'currency', label: 'Currency', isSortPosssible: false },
  { field: 'datetime', label: 'DateTime', isSortPosssible: true },
  { field: 'status', label: 'Status', isSortPosssible: false },
] as const;

export const ROWS_PER_PAGE = 50;
