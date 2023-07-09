import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { ConfigProvider, theme, Breadcrumb, Layout, Menu } from 'antd';
import './App.css';
import './style.css';
import Navbar from './component/app-nav';
import Main from './component/heroMain';
import About from './component/about';
import { useEffect } from 'react';
import Resume from './component/resume';
import Contact from './component/contact';
import { Element, animateScroll as scroll } from 'react-scroll';
import TechnicalSkills from './component/techSkills';
import ProjectOne from './component/projectOne';
import ProjectTwo from './component/projectTwo';
import ProjectThree from './component/projectThree';
import ProjectStaticWebPage from './component/projectStaticWebPage';
import ProjectKBCClone from './component/projectKBCClone';
import FooterApp from './component/footer';
const { Header, Content, Footer } = Layout;
const App = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#ef5366',
        colorSecondary: '#a8a8a8',
        colorInfo: "#213363",
        colorBgTextHover: "#e3e1dc",
        colorTextSecondary: "#6c757d",
        colorLineChart: '#F18247ff',
      },
    }}>
      {/* <Layout className="layout" style={{ height: "100vh" }}> */}
      <Layout className="layout">
        <Navbar />
        <Content
          style={{
            padding: '0 50px',
            backgroundColor: "#f4f0f4",
          }}
        >
          <Routes>
            <Route path="/" element={<Element name="home">
              <Main />
            </Element>} />
            <Route path="/about" element={<Element name="about">
              <About />
            </Element>} />
            <Route path="/skills" element={<Element name="skills">
              <TechnicalSkills />
            </Element>} />
            <Route path="/resume" element={<Element name="resume">
              <Resume />
            </Element>} />
            <Route path="/contact" element={<Element name="contact">
              <Contact />
            </Element>} />
            <Route path="/project-tourwizAI" element={<Element name="project-tourwizAI">
              <ProjectOne />
            </Element>} />
            <Route path="/project-tourwizWebsite" element={<Element name="/project-tourwizWebsite">
              <ProjectTwo />
            </Element>} />
            <Route path="/project-tourwizItineraryBuilder" element={<Element name="/project-tourwizItineraryBuilder">
              <ProjectThree />
            </Element>} />
            <Route path="/project-staticWebPage" element={<Element name="/project-staticWebPage">
              <ProjectStaticWebPage />
            </Element>} />
            <Route path="/project-kbcClone" element={<Element name="/project-kbcClone">
              <ProjectKBCClone />
            </Element>} />
          </Routes>
          <div className="scroll-to-top" onClick={scrollToTop}>
            Scroll to Top
          </div>
        </Content>

      </Layout>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: "#f4f0f4"
        }}
      >
        <FooterApp />
      </Footer>
    </ConfigProvider>
  );
};
export default App;