import { Row, Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import GameItem from "./GameItem";
const GameList = (props) => {
  const { games } = props;
  const theme = useSelector((state) => state.theme);
  const formMode = useSelector((state) => state.form);
  const renderGames = () => {
    if (!games || !games.length) return <Spin />;
    return games.map((game) => <GameItem key={game.id} game={game} />);
  };

  return (
    <Row className={`game__list ${theme} ${formMode}`}>{renderGames()}</Row>
  );
};
export default GameList;
