import { FormControl, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

const StatusFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const statusType = ['all', 'completed', 'proceeding'] as const;

  const onClickControlLabel = (status: (typeof statusType)[number]) => {
    if (searchParams.has('status')) {
      searchParams.delete('status');
    }

    if (status !== 'all') {
      searchParams.append('status', status);
    }
    setSearchParams(searchParams);
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby='controlled-radio-buttons-group'
        name='controlled-radio-buttons-group'
        value={searchParams.get('status') || 'all'}
        row
      >
        {statusType.map((status) => (
          <FormControlLabel
            key={status}
            value={status}
            data-testid={`status-filter-${status}`}
            control={
              <Radio
                size='small'
                sx={{
                  color: '#F7941C',
                  '&.Mui-checked': {
                    color: '#F7941C',
                  },
                }}
              />
            }
            label={<Typography variant='body2'>{capitalizeFirstLetter(status)}</Typography>}
            onClick={() => onClickControlLabel(status)}
            sx={{
              '&.Mui-focused': {
                color: '#F7941C',
              },
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default StatusFilter;
