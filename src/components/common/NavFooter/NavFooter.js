import React from "react";
import { useHistory } from "react-router-dom";
const NavFooter = (props) => {
  const history = useHistory();
  const { theme, handleChangeTheme, setVisibleMenu, setVisibleSearchbar } =
    props;

  return (
    <div className={`nav-footer ${theme}`}>
      <div className="nav-footer__item">
        <i
          className="nav-footer__icon fas fa-home"
          onClick={() => history.push("/")}
        ></i>
      </div>
      <div className="nav-footer__item">
        <i
          class="nav-footer__icon fas fa-search"
          onClick={() => setVisibleSearchbar(true)}
        ></i>
      </div>
      <div className="nav-footer__item">
        <i
          class="nav-footer__icon fas fa-ellipsis-h"
          onClick={() => setVisibleMenu(true)}
        ></i>
      </div>
      <div className="nav-footer__item" onClick={handleChangeTheme}>
        <i class="nav-footer__icon fas fa-moon"></i>
      </div>
      <div className="nav-footer__item">
        <i class="nav-footer__icon fas fa-cog"></i>
      </div>
    </div>
  );
};
export default NavFooter;
