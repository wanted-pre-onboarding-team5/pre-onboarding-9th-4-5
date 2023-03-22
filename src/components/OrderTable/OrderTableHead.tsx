import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useOrderTableFunctions } from '@/hooks/useOrderTableFunctions';

export const OrderTableHead = () => {
  const { sortById, sortByTime, filterByStatus } = useOrderTableFunctions();

  const headerRows = [
    {
      title: '주문번호',
      callback: sortById,
    },
    {
      title: '거래시간',
      callback: sortByTime,
    },
    {
      title: '주문처리상태',
      callback: filterByStatus,
    },
    { title: '고객번호' },
    { title: '고객이름' },
    { title: '가격' },
  ];

  return (
    <TableHead>
      <TableRow>
        {headerRows.map(({ title, callback }, i) => (
          <TableCell key={title + i} onClick={callback}>
            {title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
