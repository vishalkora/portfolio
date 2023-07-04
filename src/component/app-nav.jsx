import React, { Component } from 'react';
import TourwizLogo from "../assets/images/simform.png";
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button, Space, Col, Row, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, DownOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import ProjectOne from './projectOne';
import ProtoType1 from './protoType1';
import ProtoType3 from './protoType3';
import ProtoType2 from './protoType2';

class Navbar extends Component {
    state = {
        current: '',
        visible: false
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    downloadPDF = () => {
        const fileURL = 'https://drive.google.com/file/d/1pPVQg_bDp0_s1ZEEX94OxplwIjGlt7rE/view?usp=sharing'; // Replace with the direct download link
        const tempAnchor = document.createElement('a');
        tempAnchor.href = fileURL;
        tempAnchor.target = '_blank'; // Open the link in a new tab
        tempAnchor.rel = 'noopener noreferrer'; // Set necessary security attributes
        tempAnchor.click();
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    onClick = (e) => {
        console.log('click ', e);
        this.setState({ current: e });
    };
    render() {
        const isMobileView = window.innerWidth >= 768 ? true : false;
        const items = [
            {
                label: <label className="mb-1">Tourwiz Projects <DownOutlined style={{ fontSize: '10px' }} /></label>,
                key: 'mail',
                children: [
                    {
                        type: 'group',
                        label: 'Tourwiz Features',
                        children: [
                            {
                                label: "Itinerary Builder",
                                key: 'setting:1',
                                children: [
                                    {
                                        type: 'group',
                                        label: <ProtoType3 />,
                                    },
                                ],
                            },
                            {
                                label: 'Travel Website',
                                key: 'setting:2',
                                children: [
                                    {
                                        type: 'group',
                                        label: <ProtoType2 />,
                                    },
                                ],

                            },
                            {
                                label: 'TourWizAI Lite',
                                key: 'setting:3',
                                children: [
                                    {
                                        type: 'group',
                                        label: <ProtoType1 />,
                                    },
                                ],

                            },
                        ],
                    },
                ],

            },
            {
                label: (
                    <Link to="/project-staticWebPage" className='text-decoration-none'>Static Webpage Project</Link>
                ),
                key: 'app',
            },
            {

                label: (
                    <Link to="/project-kbcClone" className='text-decoration-none'>KBC Clone Game Project</Link>
                ),
                key: 'SubMenu',
            },
        ];
        const css = `
        .heroText{
            font-size: 24px;
            color:#ef5366 !important;
            // font-family: Graphik !important;
            font-weight: 700 !important;
            // margin-right: 42px ;
            // margin-left: 32px ;
            padding-top: 0px;
            
            // padding-bottom: 15px;
          }
          .heroText label span {
            color:#ef5366 !important;
            font-weight: 900;
          }
          .heroText label {
            font-size: 24px;
            // color:#212529 !important;
            //    font-weight: 400;
          }
       
           .navBtn{
            padding-top:8px;
            color:#a8a8a8 !important;
            font-size: 14px ;
            font-weight:550 !important;
        }
        .navBtn:hover{
            color:#ef5366 !important;
        }
        `
        return (
            <Row className={isMobileView ? 'pt-2 px-5 bg-white' : 'px-2 py-2 bg-white'}>
                <Col xs={24} xl={24} md={24} className={isMobileView ? 'px-5 bg-white' : 'bg-white'}>
                    <nav className="menuBar">
                        <style>{css}</style>
                        <div className="logo">
                            {/* <img
                                src={TourwizLogo}
                                alt="TourWiz"
                                style={{ height: "26px", marginLeft: "0px", marginRight: "22px" }}

                            /> */}
                            <div className='heroText'>
                                {/* <label>{`{VISHALKORA}`}</label> */}
                                <label className=""><span>{`</>`}</span>VISHAL</label>
                            </div>
                        </div>
                        <div className="menuCon">
                            <div className="leftMenu">
                                <Space size={[8, 16]} wrap>
                                    <Button type="link" className="navBtn" ><Link to="/" className='text-decoration-none'>Home</Link></Button>
                                    <Button type="link" className="navBtn" ><Link to="/about" className='text-decoration-none'>About us</Link></Button>
                                    <Button type="link" className="navBtn" ><Link to="/skills" className='text-decoration-none'>Technical Skills</Link></Button>
                                    <Button type="link" className="navBtn" ><Link to="/resume" className='text-decoration-none'>Resume</Link></Button>
                                    <Button type="link" className="navBtn" ><Link to="/contact" className='text-decoration-none'>Contact</Link></Button>
                                </Space>
                            </div>
                            <div className="rightMenu">
                                <Button type="primary"
                                    size={"large"}
                                    shape="default"
                                    className="px-3 border-0 text-center"
                                    style={{ fontSize: "14px", fontWeight: "700", borderRadius: "4px" }}
                                    onClick={this.downloadPDF}
                                >
                                    Download Resume
                                </Button>
                            </div>
                            <Button className="barsMenu" type="" onClick={this.showDrawer}>
                                <span className="barsBtn"></span><span className="barsBtnName">Menu</span>
                            </Button>
                            <Drawer
                                title={
                                    <div className='heroText'>
                                        <label className=""><span>{`</>`}</span>VISHAL</label>
                                    </div>
                                }
                                placement="left"
                                closable={true}
                                onClose={this.onClose}
                                visible={this.state.visible}
                                width="100%"
                                closeIcon={<CloseOutlined />}
                                autoFocus={true}
                            >
                                <LeftMenu />
                                <RightMenu />
                            </Drawer>

                        </div>
                    </nav>
                </Col>
                <Col xs={24} xl={24} md={24} className={isMobileView ? 'leftMenu px-5 mx-2 bg-white' : 'leftMenu bg-white'} >
                    <Menu onClick={() => this.onClick} selectedKeys={this.state.current} mode="horizontal" items={items} style={{ border: "none", fontSize: "14px", fontWeight: "600" }} />
                </Col>
            </Row>
        );
    }
}

export default Navbar;
