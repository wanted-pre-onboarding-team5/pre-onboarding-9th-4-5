import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { useForm } from '../hooks/useForm';

export const StatusSelect = () => {
  const { status, handleSelectChange } = useForm();

  return (
    <Box width='150px'>
      <FormControl fullWidth>
        <InputLabel id='status'>주문처리상태</InputLabel>
        <Select
          labelId='status'
          value={status as string}
          label='주문처리상태'
          onChange={handleSelectChange}
        >
          <MenuItem value={'all'}>전체</MenuItem>
          <MenuItem value={'true'}>true</MenuItem>
          <MenuItem value={'false'}>false</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
