import { createBrowserRouter } from 'react-router-dom';

import { Main } from '@/pages/Main';

const routes = [
  {
    path: '/',
    element: <Main />,
  },
];

export const router = createBrowserRouter(routes);
