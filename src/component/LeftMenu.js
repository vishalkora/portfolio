import React from 'react';
import { Menu, Grid } from 'antd';
import { NavLink } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {

  const { md } = useBreakpoint()
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="Home">
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item key="About">
        <a href="/about">About</a>
      </Menu.Item>
      <Menu.Item key="Skills">
        <a href="/skills">Technical Skills</a>
      </Menu.Item>
      <Menu.Item key="Resume">
        <a href="/resume">Resume</a>
      </Menu.Item>
      <Menu.Item key="Contact">
        <a href="/contact">Contact</a>
      </Menu.Item>
      <SubMenu key="sub1" title={<span>Tourwiz Features</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">
            <a href="/project-tourwizItineraryBuilder"> Itinerary Builder</a>
          </Menu.Item>
          <Menu.Item key="setting:2">
            <a href="/project-tourwizWebsite"> Travel Website</a>
          </Menu.Item>
          <Menu.Item key="setting:3">
            <a href="/project-tourwizAI">TourWizAI Lite</a>
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="Webpage">
        <a href="/project-staticWebPage">Static Webpage Project</a>
      </Menu.Item>
      <Menu.Item key="Game">
        <a href="/project-kbcClone">KBC Clone Game Project</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
