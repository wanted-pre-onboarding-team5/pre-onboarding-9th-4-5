import { Container } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Container>
      <h1>
        <a href='/'>
          <img style={{ width: '200px' }} src='/logo.png' alt='logo' />
          <span style={{ display: 'none' }}>SWITCH ONE</span>
        </a>
      </h1>
    </Container>
  );
};

export default Header;
