import { RouterProvider } from 'react-router-dom';
import { staticRoutes } from './staticRoutes';

const AppRoutes = () => {
  return <RouterProvider router={staticRoutes}></RouterProvider>;
};

export default AppRoutes;
