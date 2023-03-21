import { Container } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Container>
      <h1>
        <a href='/'>
          <img style={{ width: '200px' }} src='/assets/logo.png' alt='SWITCH WON' />
          <span style={{ display: 'none' }}>SWITCH WON</span>
        </a>
      </h1>
    </Container>
  );
};

export default Header;
