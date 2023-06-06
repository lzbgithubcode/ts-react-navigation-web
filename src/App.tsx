// import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';

function AppConfig() {
  return <ConfigProvider></ConfigProvider>;
}

function App() {
  return <AppConfig />;
}
export default App;
