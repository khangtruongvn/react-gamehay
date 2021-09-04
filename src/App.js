import { Layout } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.less";
import Footer from "./components/common/Footer/Footer";
import HeaderApp from "./components/common/Header/HeaderApp";
import MenuResponsive from "./components/common/ComponentResponsive/MenuResponsive";
import NavFooter from "./components/common/NavFooter/NavFooter";
import SiderApp from "./components/common/Sider/Sider";
import Pages from "./components/features/Pages/Pages";
import { getCategories } from "./slices/categoriesSlice";
import { changeTheme } from "./slices/themeSlice";
import "./styles/style.less";
import SearchbarResponsive from "./components/common/ComponentResponsive/SearchbarResponsive";

function App() {
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const menuResponsiveRef = useRef(null);
  const searchbarResponsiveRef = useRef(null);
  const [zoom, setZoom] = useState(true);
  const [pageSize, setPageSize] = useState(0);
  const theme = useSelector((state) => state.theme);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [visibleSearchbar, setVisibleSearchbar] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
    window.onresize = (event) => {
      setPageSize(event.currentTarget.innerWidth);
    };
    setPageSize(window.innerWidth);
  }, []);

  useEffect(() => {
    if (visibleMenu === true) {
      menuResponsiveRef.current.style.display = "block";
      menuResponsiveRef.current.childNodes[1].style.transform = "translateX(0)";
    } else {
      setTimeout(() => {
        menuResponsiveRef.current.style.display = "none";
      }, 300);
      menuResponsiveRef.current.childNodes[1].style.transform =
        "translateX(-100%)";
    }
  }, [visibleMenu]);

  useEffect(() => {
    if (visibleSearchbar === true) {
      searchbarResponsiveRef.current.style.display = "block";
      searchbarResponsiveRef.current.childNodes[1].style.transform =
        "translateY(0)";
    } else {
      setTimeout(() => {
        searchbarResponsiveRef.current.style.display = "none";
      }, 300);
      searchbarResponsiveRef.current.childNodes[1].style.transform =
        "translateY(-100%)";
    }
  }, [visibleSearchbar]);

  const handleZoomMenu = () => {
    if (pageSize >= 992) return setZoom((zoom) => !zoom);
    setVisibleMenu(true);
  };

  const handleChangeTheme = () => {
    let themeOption;
    if (theme === "dark") {
      themeOption = "light";
    } else {
      themeOption = "dark";
    }
    dispatch(changeTheme(themeOption));
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <HeaderApp
            zoom={zoom}
            theme={theme}
            handleZoomMenu={handleZoomMenu}
            handleChangeTheme={handleChangeTheme}
            setVisibleSearchbar={setVisibleSearchbar}
          />
          <Layout className="app__layout">
            <SiderApp zoom={zoom} />
            <div style={{ width: "100%" }}>
              <Pages zoom={zoom} />
              <Footer zoom={zoom} />
            </div>
          </Layout>
          <MenuResponsive
            theme={theme}
            menuRef={menuRef}
            setVisibleMenu={setVisibleMenu}
            menuResponsiveRef={menuResponsiveRef}
          />
          <NavFooter
            theme={theme}
            setVisibleMenu={setVisibleMenu}
            handleChangeTheme={handleChangeTheme}
            setVisibleSearchbar={setVisibleSearchbar}
          />
          <SearchbarResponsive
            theme={theme}
            setVisibleSearchbar={setVisibleSearchbar}
            searchbarResponsiveRef={searchbarResponsiveRef}
          />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
