import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useRouteError } from 'react-router-dom';

import { PATH_ROUTE } from '@/constants';

import { useMovePage } from '@/hooks/useMovePage';

interface ErrorType {
  statusText?: string;
  message?: string;
}

export const ErrorPage = () => {
  const error = useRouteError() as ErrorType;
  console.error(error);

  const [goRoot] = useMovePage([PATH_ROUTE.root]);

  const handleButtonClick = () => {
    goRoot();
  };

  return (
    <Box>
      <Typography variant='h3'>에러가 발생했어요!</Typography>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button onClick={handleButtonClick}>메인 페이지로 가기</Button>
    </Box>
  );
};
