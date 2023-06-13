import React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';

const BasicLayout: React.FC<RouteConfigComponentProps> = (props) => {
  const { route } = props;
  return (
    <div>
      BasicLayout
      <div style={{ background: '#222222' }}>{renderRoutes(route?.routes)}</div>
    </div>
  );
};

export default BasicLayout;
