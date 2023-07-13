import 'antd/dist/reset.css';
import AppRoutes from './routes';

import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';

const AppConfig = () => {
  return (
    <ConfigProvider
      direction="rtl"
      componentSize="middle"
      locale={zhCN}
      theme={{
        token: { colorPrimary: '#00b96b' },
        algorithm: theme.darkAlgorithm,
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  );
};

const App = () => {
  return <AppConfig />;
};
export default App;
