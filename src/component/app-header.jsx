import React from "react";
import { useState } from 'react';
import TourwizLogo from "../assets/images/simform.png";
import { Layout, Typography, theme, Button, Space, Menu, Col, Row } from "antd";
import { AppstoreOutlined, MailOutlined, DownOutlined } from '@ant-design/icons';
const content = (
    <div>
        <button className="btn m-0 p-0">Logout</button>
    </div>
);
const items = [
    {
        label: <label className="mb-1">Navigation One <DownOutlined style={{ fontSize: '10px' }} /></label>,
        key: 'mail',
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                        children: [
                            {
                                type: 'group',
                                label: 'Item 1',
                                children: [
                                    {
                                        label: 'Option 1',
                                        key: 'setting:1',
                                    },
                                    {
                                        label: 'Option 2',
                                        key: 'setting:2',
                                    },
                                ],
                            },
                            {
                                type: 'group',
                                label: 'Item 2',
                                children: [
                                    {
                                        label: 'Option 3',
                                        key: 'setting:3',
                                    },
                                    {
                                        label: 'Option 4',
                                        key: 'setting:4',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],

    },
    {
        label: <label className="mb-1">Navigation Two <DownOutlined style={{ fontSize: '10px' }} /></label>,
        key: 'app',
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],

    },
    {
        label: <label className="mb-1">Navigation Two <DownOutlined style={{ fontSize: '10px' }} /></label>,
        key: 'SubMenu',
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
        key: 'alipay',
    },
];
const { useToken } = theme;
const AppHeader = (props) => {
    const { Header } = Layout;
    const { Title } = Typography;
    const { token } = useToken();
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const css = `
    .heroText{
        font-size: 24px;
        color:#ef5366 !important;
        font-weight: 700 !important;
        margin-right: 42px ;
        margin-left: 32px ;
        padding-top: 0px;
        
        // padding-bottom: 15px;
      }
      .heroText label {
        font-size: 24px;
        // color:#212529 !important;
        //    font-weight: 400;
      }
   
       .navBtn{
        color:#a8a8a8 !important;
        font-size: 14px ;
        font-weight:550 !important;
    }
    .navBtn:hover{
        color:#ef5366 !important;
    }
    `
    return (
        <Header style={{ backgroundColor: "#fff" }}>
            <style>{css}</style>
            <Title
                level={4}
                style={{
                    margin: "0px",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                }}

            >
                {/* <img
            src={TourwizLogo}
            alt="TourWiz"
            style={{ height: "26px", marginLeft: "0px", marginRight: "22px" }}

        /> */}
                <div className="heroText">
                    <label>{`{VISHALKORA}`}</label>
                    {/* <label className="">{`<VISHALKORA/>`}</label> */}
                </div>
                <Space wrap>
                    <Button type="link" className="navBtn" >About us</Button>
                    <Button type="link" className="navBtn" >Experience</Button>
                    <Button type="link" className="navBtn" >Technical SKills</Button>
                    <Button type="link" className="navBtn" >Certifications</Button>
                    <Button type="link" className="navBtn" >Contact us</Button>
                </Space>
            </Title>
            <Title
                level={3}
                style={{
                    marginTop: "15px",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ border: "none" }} />
            </Title>
        </Header>
    );
};

export default AppHeader;
