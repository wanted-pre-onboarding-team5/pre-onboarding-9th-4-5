import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';

import { ORDER_TABLE_FILTER_OPTIONS } from '@/constants';

interface OrderTableFilterProps {
  currentFilter: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const OrderTableFilter = ({ currentFilter, onChange }: OrderTableFilterProps) => {
  return (
    <Box sx={{ resize: 'horizontal', overflow: 'visible', px: 2 }}>
      <FormLabel
        id='order-status'
        sx={{
          mb: 1.5,
          fontWeight: 'xl',
          textTransform: 'uppercase',
          fontSize: 'xs',
          letterSpacing: '0.15rem',
        }}
      >
        주문 처리 상태
      </FormLabel>
      <RadioGroup
        aria-labelledby='order-status'
        value={currentFilter}
        onChange={onChange}
        sx={{ gap: 2, mb: 2, flexWrap: 'wrap', flexDirection: 'row' }}
      >
        {ORDER_TABLE_FILTER_OPTIONS.map(({ label, value, color }) => (
          <Sheet
            key={label}
            sx={{
              position: 'relative',
              width: 60,
              height: 40,
              flexShrink: 0,
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: color,
              '--joy-focus-outlineOffset': '4px',
              '--joy-palette-focusVisible': (theme) => theme.vars.palette.neutral.outlinedBorder,
              [`& .${radioClasses.checked}`]: {
                [`& .${radioClasses.label}`]: {
                  fontWeight: 'lg',
                },
                [`& .${radioClasses.action}`]: {
                  '--variant-borderWidth': '2px',
                  borderColor: 'text.secondary',
                },
              },
              [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                outlineWidth: '2px',
              },
            }}
          >
            <Radio color='neutral' overlay disableIcon value={value} label={label} />
          </Sheet>
        ))}
      </RadioGroup>
    </Box>
  );
};
