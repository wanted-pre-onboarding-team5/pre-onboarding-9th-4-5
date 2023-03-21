import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { OrderTableFilter } from './OrderTableFilter';
import { SearchBar } from './SearchBar';

interface OrderTableToolbarProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchBarChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentFilter: string;
  searchInputValue: string;
}

export const OrderTableToolbar = ({
  onChange,
  currentFilter,
  onSearchBarChange,
  searchInputValue,
}: OrderTableToolbarProps) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        variant='h5'
        id='tableTitle'
        component='div'
        letterSpacing='2px'
        fontWeight='bold'
      >
        Order Table
      </Typography>
      <SearchBar searchInputValue={searchInputValue} onChange={onSearchBarChange} />
      <OrderTableFilter onChange={onChange} currentFilter={currentFilter} />
    </Toolbar>
  );
};
