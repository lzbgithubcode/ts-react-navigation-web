import 'antd/dist/reset.css';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';

function AppConfig() {
  return <ConfigProvider></ConfigProvider>;
}

function App() {
  return (
    <Provider>
      <AppConfig />
    </Provider>
  );
}
export default App;
