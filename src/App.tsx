import 'antd/dist/reset.css';
import AppRoutes from './routes';

import { ConfigProvider, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { Provider } from 'react-redux';
import store from './store';

const AppConfig = () => {
  return (
    <ConfigProvider
      direction="ltr"
      componentSize="middle"
      locale={zhCN}
      theme={{
        token: { colorPrimary: '#00b96b' },
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ConfigProvider>
  );
};

const App = () => {
  return <AppConfig />;
};
export default App;
