import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';

import { ORDER_TABLE_COLUMNS } from '@/constants';

import { OrderDataKey, TableSortProps } from '@/types/OrderDataType';

interface CellWithSortLabelProps extends TableSortProps {
  id: OrderDataKey;
  label: string;
  createSortHandler: (property: OrderDataKey) => (event: React.MouseEvent<unknown>) => void;
}

const CellWithSortLabel = ({
  orderBy,
  id,
  ascOrDesc,
  createSortHandler,
  label,
}: CellWithSortLabelProps) => {
  return (
    <TableSortLabel
      active={orderBy === id}
      direction={orderBy === id ? ascOrDesc : 'asc'}
      onClick={createSortHandler(id)}
    >
      {label}
      {orderBy === id ? (
        <Box component='span' sx={visuallyHidden}>
          {ascOrDesc === 'desc' ? 'sorted descending' : 'sorted ascending'}
        </Box>
      ) : null}
    </TableSortLabel>
  );
};

interface OrderTableHeadProps extends TableSortProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: OrderDataKey) => void;
}

export const OrderTableHead = ({ ascOrDesc, orderBy, onRequestSort }: OrderTableHeadProps) => {
  const createSortHandler = (property: OrderDataKey) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {ORDER_TABLE_COLUMNS.map((column) => (
          <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
            {column.hasSortLabel ? (
              <CellWithSortLabel
                orderBy={orderBy}
                id={column.id}
                ascOrDesc={ascOrDesc}
                createSortHandler={createSortHandler}
                label={column.label}
              />
            ) : (
              column.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
