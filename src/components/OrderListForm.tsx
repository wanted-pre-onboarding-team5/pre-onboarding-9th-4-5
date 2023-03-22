import { Box, TextField } from '@mui/material';

import { useForm } from '../hooks/useForm';

import { StatusSelect } from '@/components/StatusSelect';

export const OrderListForm = () => {
  const { handleInputChange } = useForm();
  return (
    <Box display='flex' justifyContent='end' my={5} gap={2}>
      <StatusSelect />
      <TextField
        id='outlined-basic'
        label='고객 검색'
        variant='outlined'
        placeholder='검색하실 고객이름을 입력하세요.'
        size='medium'
        style={{ width: '300px' }}
        onChange={handleInputChange}
      />
    </Box>
  );
};
