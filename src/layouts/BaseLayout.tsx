import { Outlet } from 'react-router';
import { Layout } from 'antd';
import SideBar from './SideBar';
const { Header, Content, Footer } = Layout;
const BasicLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout>
        <Header></Header>
        <Content>
          {/* 渲染子路由 */}
          <Outlet></Outlet>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
