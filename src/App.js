import { ConfigProvider, theme, Breadcrumb, Layout, Menu } from 'antd';
import './App.css';
import './style.css';
import Navbar from './component/app-nav';
import Main from './component/heroMain';
import About from './component/about';
import { useEffect } from 'react';
import Resume from './component/resume';
import Contact from './component/contact';
const { Header, Content, Footer } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#ef5366',
        colorSecondary: '#a8a8a8',
        colorInfo: "#213363",
        colorBgTextHover: "#e3e1dc",
        colorTextSecondary: "#6c757d",
        colorLineChart: '#F18247ff',
        // colorBgBase: "#F18247ff",
      },
    }}>
      <Layout className="layout" style={{ height: "100vh" }}>
        {/* <Layout className="layout"> */}
        <Navbar />
        <Content
          style={{
            padding: '0 50px',
            backgroundColor: "#f4f0f4"
          }}
        >
          <Main />
          {/* <About /> */}
          {/* <Resume /> */}
          {/* <Contact /> */}
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