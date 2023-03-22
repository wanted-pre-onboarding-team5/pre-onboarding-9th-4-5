import { FormControl, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

const StatusFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const statusArray = ['all', 'approved', 'rejected'];

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby='controlled-radio-buttons-group'
        name='controlled-radio-buttons-group'
        value={searchParams.get('status') || 'all'}
        row
      >
        {statusArray.map((status) => (
          <FormControlLabel
            key={status}
            value={status}
            data-testid={`status-filter-${status}`}
            control={<Radio size='small' />}
            label={<Typography variant='body2'>{capitalizeFirstLetter(status)}</Typography>}
            onClick={() => {
              if (searchParams.has('status')) {
                searchParams.delete('status');
              }

              if (status !== 'all') {
                searchParams.append('status', status);
              }
              setSearchParams(searchParams);
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default StatusFilter;
