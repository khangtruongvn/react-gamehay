import { Menu, Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { socials } from "../../../utils/socials";

const MenuResponsive = (props) => {
  const history = useHistory();
  const { theme, menuResponsiveRef, setVisibleMenu } = props;
  const categories = useSelector((state) => state.categories.data);

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
  const handleCloseMenu = () => {
    setVisibleMenu(false);
  };

  const handleOnSelectMenu = (item) => {
    handleCloseMenu();
    if (
      item.key === "home" ||
      item.key === "howtodown" ||
      item.key === "request" ||
      item.key === "user"
    )
      return history.push(`/${item.key}`);
    history.push(`/games/${item.key}`);
  };
  return (
    <div className={`menu__responsive ${theme}`} ref={menuResponsiveRef}>
      <div className="overlay" onClick={() => setVisibleMenu(false)}></div>
      <div className="menu__group">
        <div className="menu__heading">
          <div onClick={handleCloseMenu}>
            <i className="fas fa-chevron-left"></i>
            <p>Back</p>
          </div>
        </div>
        <Menu mode="inline" className="menu" onSelect={handleOnSelectMenu}>
          <Menu.Item className="menu__item" key="home">
            <i className="menu__item-icon fas fa-home"></i>Trang chủ
          </Menu.Item>
          <Menu.SubMenu
            key="sub1"
            title="Thể loại"
            className="menu__sub-menu"
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

          <Menu.Item className="menu__item" key="17">
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
        <div className="footer">{renderSocials()}</div>
      </div>
    </div>
  );
};
export default MenuResponsive;
