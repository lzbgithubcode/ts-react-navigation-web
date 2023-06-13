import 'antd/dist/reset.css';
import AppRoutes from './routes';

// import { ConfigProvider, Button, theme } from 'antd';

const AppConfig = () => {
  return (
    // <ConfigProvider
    //   direction="rtl"
    //   componentSize="middle"
    //   theme={{
    //     token: { colorPrimary: '#00b96b' },
    //     algorithm: theme.darkAlgorithm,
    //   }}
    // >
    //   <Button>我是内容</Button>
    // </ConfigProvider>
    <>
      <AppRoutes></AppRoutes>
    </>
  );
};

const App = () => {
  return <AppConfig />;
};
export default App;
