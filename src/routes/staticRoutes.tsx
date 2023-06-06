import { RouteConfig } from 'react-router-config'; // 路由的配置
import { BasicLayout } from '@/layouts';
import React from 'react';

const staticRoutes: RouteConfig[] = [
  {
    path: '/',
    title: '/',
    component: BasicLayout,
    routes: [
      {
        path: '/home',
        title: '首页',
        icon: 'home',
        component: React.lazy(() => import('@/pages/home')),
      },
      {
        path: '/about',
        title: '关于我们',
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
];

export default staticRoutes;
