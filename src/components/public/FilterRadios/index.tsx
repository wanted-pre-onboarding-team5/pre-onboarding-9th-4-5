import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const FilterRadios = ({ radios, filters, handleStatus }) => {
  return (
    <FormControl
      sx={{
        width: '100%',
        margin: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <FormLabel sx={{ pr: 2, fontWeight: 'bold' }}>{radios.label}</FormLabel>
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
            control={<Radio />}
            label={radio.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default FilterRadios;
