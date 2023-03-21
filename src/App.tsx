import { Container } from '@mui/material';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

const App = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <RouterProvider router={router} />
      </Container>
    </>
  );
};

export default App;
