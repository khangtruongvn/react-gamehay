import { Layout, Switch } from "antd";
import React from "react";
import { Link, useHistory } from "react-router-dom";
const AdminHeader = () => {
  return (
    <Layout.Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="header__navigation">
        <Link to="/admin/games" style={{ padding: 20 }}>
          Danh sách game
        </Link>
        <Link to="/admin/add" style={{ padding: 20 }}>
          Thêm game
        </Link>
      </div>
      <Switch />
    </Layout.Header>
  );
};
export default AdminHeader;
