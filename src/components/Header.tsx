import { Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container maxWidth='md' sx={{ marginTop: 2 }}>
      <Link to='/?datetime=2023-03-08'>
        <Box
          component='img'
          style={{ width: '120px' }}
          src='/assets/switchone_logo.png'
          alt='SWITCH WON'
        />
        <Typography component='h1' style={{ display: 'none' }}>
          SWITCH WON
        </Typography>
      </Link>
    </Container>
  );
};

export default Header;
