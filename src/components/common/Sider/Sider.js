import { Layout, Menu, Spin } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { socials } from "../../../utils/socials";

const SiderApp = ({ zoom }) => {
  const categories = useSelector((state) => state.categories.data);
  const theme = useSelector((state) => state.theme);
  const history = useHistory();

  const renderCategories = () => {
    if (!categories || !categories.length) return <Spin />;
    return categories.map((category) => (
      <Menu.Item className="menu__item" key={category.code}>
        {category.content}
      </Menu.Item>
    ));
  };

  const renderSocials = () => {
    if (!socials || !socials.length) return <Spin />;
    return socials.map((social) => (
      <a href={social.link} className="sider__footer-item" target="_blank">
        <i className={social.icon}></i>
      </a>
    ));
  };

  const handleOnSelectMenu = (item) => {
    window.scrollTo(0, 0);
    if (
      item.key === "home" ||
      item.key === "howtodown" ||
      item.key === "request" ||
      item.key === "user" ||
      item.key === "sitemap"
    )
      return history.push(`/${item.key}`);
    history.push(`/games/${item.key}`);
  };

  const handleOnTitleClick = ({ key, domEvent }) => {
    console.log(domEvent);
  };

  return (
    <Layout.Sider className={`app__sider ${theme}`} width={zoom ? 260 : 68}>
      <Menu mode="inline" className="sider__menu" onSelect={handleOnSelectMenu}>
        <Menu.Item className="menu__item" key="home">
          <i className="menu__item-icon fas fa-home"></i>Trang chủ
        </Menu.Item>
        <Menu.SubMenu
          key="sub1"
          title="Thể loại"
          className="menu__sub-menu"
          disabled={zoom ? false : true}
          onTitleClick={handleOnTitleClick}
          icon={<i className="menu__item-icon fas fa-gamepad"></i>}
        >
          {renderCategories()}
        </Menu.SubMenu>
        <Menu.Item className="menu__item" key="howtodown">
          <i className="menu__item-icon fas fa-download"></i>
          Hướng dẫn tải game
        </Menu.Item>
        <div className="sider__line"></div>

        <Menu.Item className="menu__item" key="request">
          <i class="menu__item-icon fas fa-info-circle"></i>
          Yêu cầu upload game
        </Menu.Item>
        <div className="sider__line"></div>

        <Menu.Item className="menu__item" key="user">
          <i className="menu__item-icon fas fa-user"></i>
          Tài khoản
        </Menu.Item>
        <div className="sider__line"></div>

        <Menu.Item className="menu__item" key="sitemap">
          <i className="menu__item-icon fas fa-map-signs"></i>
          Sitemap
        </Menu.Item>
        <Menu.Item className="menu__item" key="18">
          <i class="menu__item-icon fas fa-shield-alt"></i>
          Disclaimers
        </Menu.Item>
        <Menu.Item className="menu__item" key="19">
          <i className="menu__item-icon fas fa-user-shield"></i>
          Privicy policy
        </Menu.Item>
      </Menu>
      <div
        className="sider__footer"
        style={{ display: zoom ? "block" : "none" }}
      >
        {renderSocials()}
      </div>
    </Layout.Sider>
  );
};
export default SiderApp;
