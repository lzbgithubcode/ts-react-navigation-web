// import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';

function AppConfig() {
  return (
    <ConfigProvider direction="rtl" componentSize="middle"></ConfigProvider>
  );
}

function App() {
  return <AppConfig />;
}
export default App;
