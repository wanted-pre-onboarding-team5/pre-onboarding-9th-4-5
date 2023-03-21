import { Box, Container, Typography } from '@mui/material';
import { Link, useRouteError } from 'react-router-dom';

interface ErrorType {
  message: string;
  data: string;
}

export const Error = () => {
  const error = useRouteError() as ErrorType;
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      sx={{ minHeight: 660 }}
    >
      <Box>
        <Typography style={{ fontWeight: 700, fontSize: 20, color: 'red', textAlign: 'center' }}>
          에러가 발생했어요 !
        </Typography>
      </Box>
      <Box>
        <Typography style={{ fontWeight: 700, fontSize: 20, color: 'gray', textAlign: 'center' }}>
          {error.message || error.data}
        </Typography>
      </Box>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Typography
          style={{
            fontWeight: 700,
            fontSize: 20,
            color: 'gray',
            textAlign: 'center',
          }}
        >
          홈으로 가기
        </Typography>
      </Link>
    </Container>
  );
};
