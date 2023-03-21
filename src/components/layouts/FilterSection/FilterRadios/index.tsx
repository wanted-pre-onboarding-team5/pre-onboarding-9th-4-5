import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { FILTER_STATUS } from '@/constants';

import { querySplit } from '@/utils/querySplit';

const FilterRadios = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = querySplit(searchParams.toString());

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>, status: string) => {
    setSearchParams({ ...filters, page: '0', status });
  };

  return (
    <FormControl
      sx={{
        margin: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <FormLabel
        sx={{
          pr: 2,
          color: '#0f0f0f',
          fontWeight: 'bold',
          '&.Mui-focused': {
            color: '#0f0f0f',
          },
        }}
      >
        {FILTER_STATUS.label}
      </FormLabel>
      <RadioGroup
        row
        defaultValue='all'
        name='radio-buttons-group'
        value={filters[FILTER_STATUS.name] || 'all'}
        onChange={handleRadio}
      >
        {FILTER_STATUS.options.map((radio) => (
          <FormControlLabel
            key={radio.value}
            value={radio.value}
            control={
              <Radio
                sx={{
                  color: '#F7941C',
                  '&.Mui-checked': {
                    color: '#F7941C',
                  },
                }}
              />
            }
            label={radio.label}
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

export default FilterRadios;
