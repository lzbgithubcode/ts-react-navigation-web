import { Outlet } from 'react-router';

const BasicLayout = () => {
  return (
    <div>
      BasicLayout
      <div style={{ background: '#222222' }}>
        {/* 渲染子路由 */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default BasicLayout;
