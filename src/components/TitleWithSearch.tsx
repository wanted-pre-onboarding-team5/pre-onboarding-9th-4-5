import { Typography, Stack, Input } from '@mui/material';

const TitleWithSearch = () => {
  return (
    <Stack direction='row' justifyContent='space-between'>
      <Typography variant='h5' fontWeight='bold'>
        Transaction History
      </Typography>
      <Input />
    </Stack>
  );
};

export default TitleWithSearch;
