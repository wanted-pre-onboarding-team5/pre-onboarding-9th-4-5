import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { OrderTableFilter } from './OrderTableFilter';

export const OrderTableToolbar = () => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography sx={{ flex: '1 1 100%' }} variant='h5' id='tableTitle' component='div'>
        Order Table
      </Typography>
      <OrderTableFilter />
    </Toolbar>
  );
};
