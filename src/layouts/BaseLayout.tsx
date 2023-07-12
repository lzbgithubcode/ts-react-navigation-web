import { Outlet } from 'react-router';
import { Layout } from 'antd';

const BasicLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      BasicLayout
      <div style={{ background: '#222222' }}>
        {/* 渲染子路由 */}
        <Outlet></Outlet>
      </div>
    </Layout>
  );
};

export default BasicLayout;
