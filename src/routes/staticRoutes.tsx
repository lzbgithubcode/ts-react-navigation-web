import { BasicLayout } from '@/layouts';
import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

// https://github.com/remix-run/react-router/blob/dev/examples/data-router/src/app.tsx
// https://reactrouter.com/en/main/route/route
const routes: RouteObject[] = [
  {
    path: '/', // 路径
    Component: BasicLayout, //渲染组件
    children: [
      {
        path: '/home',
        index: true, // 子路由的默认路由
        Component: lazy(() => import('@/pages/home')),
      },
      {
        path: '/about',
        Component: lazy(() => import('@/pages/about')),
      },
    ],
  },
  {
    path: '/404',
    Component: lazy(() => import('@/pages/error/NoFund404')),
  },
];
const staticRoutes = createBrowserRouter(routes);

export { staticRoutes };
