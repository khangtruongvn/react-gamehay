import { Layout } from "antd";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AddEdit from "./components/AddEdit/AddEdit";
import Games from "./components/Games/Games";
import AdminHeader from "./components/Header/AdminHeader";
const Admin = () => {
  return (
    <Layout className="layout">
      <AdminHeader />
      <Layout.Content className="admin__content">
        <Switch>
          <Redirect exact from="/admin" to="/admin/games" />
          <Route path="/admin/games" component={Games} />
          <Route path="/admin/add" component={AddEdit} />
          <Route path="/admin/edit/:gameId" component={AddEdit} />
        </Switch>
      </Layout.Content>
    </Layout>
  );
};
export default Admin;
