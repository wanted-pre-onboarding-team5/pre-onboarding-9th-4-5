import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export const OrderTableFilter = () => {
  return (
    <Tooltip title='Filter list'>
      <IconButton>
        <FilterListIcon />
      </IconButton>
    </Tooltip>
  );
};
