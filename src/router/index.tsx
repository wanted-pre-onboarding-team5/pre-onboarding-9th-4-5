import { createBrowserRouter } from 'react-router-dom';

import { PATH_ROUTE } from '@/constants';
import { Orders, Error } from '@/pages';

import Root from '@/pages/Root';

const routes = [
  {
    path: PATH_ROUTE.root,
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Orders />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
