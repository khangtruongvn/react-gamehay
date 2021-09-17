import { Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "../../common/NoteFound/NotFound";
import DetailsPage from "./DetailsPage/DetailsPage";
import GamePage from "./GamesPage/GamePage";
import HomePage from "./HomePage/HomePage";
import SearchPage from "./SearchPage/SearchPage";
import TutorialPage from "./TutorialPage/TutorialPage";
import UserPage from "./UserPage/UserPage";
const Pages = ({ zoom }) => {
  const theme = useSelector((state) => state.theme);
  return (
    <Layout.Content
      className={`app__content ${theme}`}
      style={{ marginLeft: zoom ? 260 : 68 }}
    >
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/games/:category_code/:id" component={DetailsPage} />
        <Route path="/games/:category_code" component={GamePage} />
        <Route path="/search/:keyword" component={SearchPage} />
        <Route path="/howtodown" component={TutorialPage} />
        <Route path="/user" component={UserPage} />
        <Route path="/home" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </Layout.Content>
  );
};
export default Pages;
