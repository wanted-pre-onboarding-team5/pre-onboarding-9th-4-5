import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const FilterRadios = ({ radios, filters, handleStatus }) => {
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
        {radios.label}
      </FormLabel>
      <RadioGroup
        row
        defaultValue='all'
        name='radio-buttons-group'
        value={filters[radios.name]}
        onChange={handleStatus}
      >
        {radios.options.map((radio) => (
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
