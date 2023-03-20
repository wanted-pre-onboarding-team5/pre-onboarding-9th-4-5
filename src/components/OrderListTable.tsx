import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { useOrderData } from '../hooks/useOrderData';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: '주문번호',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    disableColumnMenu: true,
    sortingOrder: ['desc', 'asc'],
  },
  {
    field: 'transaction_time',
    headerName: '거래시간',
    width: 450,
    align: 'center',
    headerAlign: 'center',
    disableColumnMenu: true,
    sortingOrder: ['desc'],
  },
  {
    field: 'status',
    headerName: '주문처리상태',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'customer_id',
    headerName: '고객번호',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'customer_name',
    headerName: '고객이름',
    width: 450,
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'currency',
    headerName: '가격',
    width: 120,
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    disableColumnMenu: true,
  },
];

export const OrderListTable = () => {
  const { orderData, page, handlePagenation } = useOrderData();

  return (
    <div style={{ height: '800px', width: '100%' }}>
      <DataGrid
        rows={orderData}
        columns={columns}
        pagination={true}
        autoPageSize={false}
        pageSizeOptions={[50]}
        paginationModel={{ page, pageSize: 50 }}
        onPaginationModelChange={handlePagenation}
        rowSelection={false}
      />
    </div>
  );
};
