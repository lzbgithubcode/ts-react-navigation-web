import 'antd/dist/reset.css';
import AppRoutes from './routes';

// import { ConfigProvider, theme } from 'antd';
// import { StyleProvider } from '@ant-design/cssinjs';

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
    //   <StyleProvider hashPriority="high">

    //   </StyleProvider>
    // </ConfigProvider>
    <>
      <AppRoutes />
    </>
  );
};

const App = () => {
  return <AppConfig />;
};
export default App;
