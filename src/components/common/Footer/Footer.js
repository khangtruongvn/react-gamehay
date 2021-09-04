import React from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
const Footer = ({ zoom }) => {
  const theme = useSelector((state) => state.theme);
  return (
    <Layout.Footer
      className={`app__footer ${theme}`}
      style={{ marginLeft: zoom ? 260 : 68 }}
    >
      <p className="footer__copyright">
        © 2021 ‧
        <a
          target="_blank"
          className="footer__copyright-link"
          href="https://www.facebook.com/khagrauu"
        >
          Game cho máy yếu
        </a>
        . All rights reserved. M
      </p>
      <p className="footer__scrolltop" onClick={() => window.scrollTo(0, 0)}>
        To top<i className="footer__scrolltop-icon fas fa-chevron-up"></i>
      </p>
    </Layout.Footer>
  );
};
export default Footer;
