import { TableHead, TableRow, TableSortLabel } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import StyledTableCell from './StyledTableCell';

import { TABLE_HEAD_CONTEXT } from '@/constants/table';

const HeadRow = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') as 'id' | 'datetime';

  return (
    <TableHead>
      <TableRow>
        {TABLE_HEAD_CONTEXT.map((item) =>
          item.isSortPosssible ? (
            <StyledTableCell size='small' sortDirection='desc' key={item.field}>
              <TableSortLabel
                direction='desc'
                data-testid={`transaction-table-head-${item.field}`}
                active={sort === item.field}
                onClick={() => {
                  if (searchParams.has('sort')) {
                    searchParams.delete('sort');
                  }

                  searchParams.append('sort', item.field);
                  setSearchParams(searchParams);
                }}
              >
                {item.label}
              </TableSortLabel>
            </StyledTableCell>
          ) : (
            <StyledTableCell key={item.field} size='small'>
              {item.label}
            </StyledTableCell>
          ),
        )}
      </TableRow>
    </TableHead>
  );
};

export default HeadRow;
