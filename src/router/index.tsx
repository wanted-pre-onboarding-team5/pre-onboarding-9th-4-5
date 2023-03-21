import { createBrowserRouter } from 'react-router-dom';

import { PATH_ROUTE } from '@/constants';
import { ErrorPage, Root } from '@/pages';

import { rootLoader } from './loaders/rootLoader';

const routes = [
  {
    path: PATH_ROUTE.root,
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
  },
];

export const router = createBrowserRouter(routes);
