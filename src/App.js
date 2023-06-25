import { ConfigProvider, theme, Breadcrumb, Layout, Menu } from 'antd';
import './App.css';
import Resume from './component/resume';
import AppHeader from './component/app-header';
import Navbar from './component/app-nav';
const { Header, Content, Footer } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#ef5366',
        colorSecondary: '#a8a8a8',
        colorBgTextHover: "#e3e1dc",
        colorTextSecondary: "#6c757d",
        colorLineChart: '#F18247ff',
        // colorBgBase: "#F18247ff",
      },
    }}>
      <Layout className="layout">
        {/* <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            height: '100px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: "#fff"
          }}
        >
          <AppHeader />
        </Header> */}
        <Navbar />
        <Content
          style={{
            padding: '0 50px',
            backgroundColor: "#f4f0f4"
          }}
        >
          <h1>test</h1>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor: "#f4f0f4"
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};
export default App;