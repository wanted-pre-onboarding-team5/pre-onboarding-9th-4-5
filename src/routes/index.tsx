import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';

import loader from './loader';

import Error from '@/pages/Error';
import Main from '@/pages/Main';
import Root from '@/pages/Root';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        loader,
        index: true,
        element: <Main />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default function PageRouter() {
  return <RouterProvider router={router} />;
}
