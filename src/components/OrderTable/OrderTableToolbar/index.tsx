import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { OrderTableFilter } from './OrderTableFilter';

interface OrderTableToolbarProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentFilter: string;
}

export const OrderTableToolbar = ({ onChange, currentFilter }: OrderTableToolbarProps) => {
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
      <OrderTableFilter onChange={onChange} currentFilter={currentFilter} />
    </Toolbar>
  );
};
