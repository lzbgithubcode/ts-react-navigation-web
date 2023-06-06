import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import staticRoutes from './staticRoutes';

const AppRoutes: React.FC = () => {
  return <BrowserRouter>{renderRoutes(staticRoutes)}</BrowserRouter>;
};

export default AppRoutes;
