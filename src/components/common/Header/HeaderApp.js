import { Input, Layout, Switch } from "antd";
import React from "react";
import { Link, useHistory } from "react-router-dom";
const HeaderApp = (props) => {
  const history = useHistory();
  const {
    theme,
    zoom,
    handleZoomMenu,
    handleChangeTheme,
    setVisibleSearchbar,
  } = props;

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
