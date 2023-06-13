import { BasicLayout } from '@/layouts';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// https://github.com/remix-run/react-router/blob/dev/examples/data-router/src/app.tsx

const staticRoutes = createBrowserRouter([
  {
    path: '/',
    Component: BasicLayout,
    children: [
      {
        path: '/home',
        icon: 'home',
        Component: React.lazy(() => import('@/pages/home')),
      },
      {
        path: '/about',
        icon: 'home',
        component: React.lazy(() => import('@/pages/about')),
      },
    ],
  },
  {
    path: '/404',
    title: '404',
    component: React.lazy(() => import('@/pages/error/NoFund404')),
  },
]);

export default staticRoutes;
