import { Layout } from 'antd';
import { ILayoutSide } from '@/types/layout';
import Logo from './Logo';
import Menu from './Menu';
const { Sider } = Layout;

const SideBar = (props: ILayoutSide) => {
  const { sidebarCollapsed, sidebarLogo } = props;
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={sidebarCollapsed}
      style={{ zIndex: '10' }}
    >
      {sidebarLogo ? <Logo /> : null}
      <Menu />
    </Sider>
  );
};

export default SideBar;
