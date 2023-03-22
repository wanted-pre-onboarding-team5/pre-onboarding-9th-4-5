import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { PAGINATION_PER_PAGE } from '@/api/orderList';
import { OrderProps, SortType, StatusType } from '@/types/props';

interface OrderTableBodyProps {
  page: string | null;
  date: string | null;
  sort: SortType;
  status: StatusType;
  search: string | null;
  data: { totalCount: number; orderList: OrderProps[] };
  isSuccess: boolean;
}

export const OrderTableBody = ({
  page,
  date,
  sort,
  status,
  search,
  data,
  isSuccess,
}: OrderTableBodyProps) => {
  const pageQueryString = page ? Number(page) : null;
  const dateQueryString = date ? new Date(date) : null;

  const filterByDate = (origin: OrderProps[]) =>
    dateQueryString === null
      ? origin
      : origin.filter(({ transaction_time }) => {
          const curDate = new Date(transaction_time);

          return (
            curDate.getFullYear() === dateQueryString.getFullYear() &&
            curDate.getMonth() === dateQueryString.getMonth() &&
            curDate.getDate() === dateQueryString.getDate()
          );
        });

  const paginatedData = (origin: OrderProps[]) =>
    pageQueryString === null
      ? origin
      : origin.slice(
          PAGINATION_PER_PAGE * (pageQueryString - 1),
          PAGINATION_PER_PAGE * pageQueryString,
        );

  const sortData = (origin: OrderProps[]) =>
    sort === 'ID_DES'
      ? origin.sort((a, b) => b.id - a.id)
      : sort === 'ID_ASC'
      ? origin.sort((a, b) => a.id - b.id)
      : sort === 'TIME_DES'
      ? origin.sort(
          (a, b) => new Date(b.transaction_time).getTime() - new Date(a.transaction_time).getTime(),
        )
      : sort === 'TIME_ASC'
      ? origin.sort(
          (a, b) => new Date(a.transaction_time).getTime() - new Date(b.transaction_time).getTime(),
        )
      : origin;

  const filterByStatusOrder = (origin: OrderProps[]) =>
    status === 'TRUE'
      ? origin.filter(({ status }) => status)
      : status === 'FALSE'
      ? origin.filter(({ status }) => !status)
      : origin;

  const filterBySearch = (origin: OrderProps[]) =>
    search === null
      ? origin
      : origin.filter(({ customer_name }) => customer_name.toLowerCase().includes(search));

  const convertedData = paginatedData(
    sortData(filterBySearch(filterByStatusOrder(filterByDate(data?.orderList)))),
  );

  const bodyRows = !isSuccess
    ? []
    : convertedData.map((row) => ({
        ...row,
      }));

  return (
    <TableBody>
      {bodyRows.map((order) => (
        <TableRow key={order.id}>
          <TableCell>{order.id}</TableCell>
          <TableCell>{order.transaction_time}</TableCell>
          <TableCell>{order.status ? 'complete' : 'in progress'}</TableCell>
          <TableCell>{order.customer_id}</TableCell>
          <TableCell>{order.customer_name}</TableCell>
          <TableCell>{order.currency}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
