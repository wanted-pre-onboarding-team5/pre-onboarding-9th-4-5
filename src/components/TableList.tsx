import { Paper, Table, TableBody, TableContainer } from '@mui/material';
import { useState } from 'react';

import { TableHeader } from './TableHeader';
import { TableItem } from './TableItem';

import { QueryData } from '@/types/queryData';

interface TabListProps {
  getDatas: QueryData[];
  currPage: number;
}

export const TableList = ({ getDatas, currentPage }: TabListProps) => {
  const [isSortedCustomerId, setIsSortedCustomerId] = useState<boolean>(false);
  const [sortedCustomerId, setSortedCustomerId] = useState();

  const listPerPage = 50;
  const offset = (currentPage - 1) * listPerPage;

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 650 }}>
      <Table sx={{ minWidth: 650 }} aria-label='switchOne-data-table'>
        <TableHeader
          getDatas={getDatas}
          isSortedCustomerId={isSortedCustomerId}
          setIsSortedCustomerId={setIsSortedCustomerId}
          setSortedCustomerId={setSortedCustomerId}
        />
        <TableBody>
          {isSortedCustomerId
            ? sortedCustomerId
                ?.slice(offset, offset + listPerPage)
                .map((data) => <TableItem data={data} key={data.id} />)
            : getDatas
                ?.slice(offset, offset + listPerPage)
                .map((data) => <TableItem data={data} key={data.id} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
