import { Input, Layout, Switch } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { checkEmptyObject } from "../../../utils/checkEmptyObject";
const HeaderApp = (props) => {
  const history = useHistory();
  const {
    theme,
    zoom,
    handleZoomMenu,
    handleChangeTheme,
    setVisibleSearchbar,
  } = props;
  const currentUser = useSelector((state) => state.user.data);
  const handleOnSearch = (keyword) => {
    history.push(`/search/${keyword}`);
  };
  return (
    <Layout.Header className={`app__header ${theme}`}>
      <div className="header__group header__group--left">
        <div className="header__menu" onClick={handleZoomMenu}>
          <i
            className={`header__menu-icon  ${
              zoom ? "fas fa-bars" : "fas fa-chevron-right"
            }`}
          ></i>
        </div>
        <Link to="/" className="header__logo">
          <h2 className="header__logo-text">Game cho máy yếu</h2>
        </Link>
      </div>
      <div className="header__group header__group--right">
        <Input.Search
          className="header__search"
          placeholder="Tìm kiếm ..."
          onSearch={handleOnSearch}
        />
        <Switch
          className="header__swich-theme"
          onChange={handleChangeTheme}
          checked={theme === "light" ? true : false}
        />
        <div
          className="header__login"
          style={{ display: checkEmptyObject(currentUser) ? "block" : "none" }}
          onClick={() => history.push("/login")}
        >
          <p>Đăng nhập</p>
        </div>
        <div
          className="header__login"
          style={{ display: checkEmptyObject(currentUser) ? "none" : "block" }}
        >
          <p>{checkEmptyObject(currentUser) ? "" : currentUser.username}</p>
        </div>
        <div className="header__user" onClick={() => history.push("/user")}>
          <i className="header__user-icon fas fa-user"></i>
        </div>
        <div
          className="header__search-icon"
          onClick={() => setVisibleSearchbar(true)}
        >
          <i className="fas fa-search"></i>
        </div>
      </div>
    </Layout.Header>
  );
};
export default HeaderApp;
