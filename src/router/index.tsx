import { createBrowserRouter } from 'react-router-dom';

import { mainLoader } from './mainLoader';

import { Main } from '@/pages/Main';

const routes = [
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
  },
];

export const router = createBrowserRouter(routes);
