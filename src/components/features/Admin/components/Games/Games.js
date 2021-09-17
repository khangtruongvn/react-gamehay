import React, { useEffect, useState } from "react";
import GameItem from "./components/GameItem";
import gamesApi from "../../../../../apis/gamesApi";
import { Row } from "antd";
const Games = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await gamesApi.getAll();
        setGames(response);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchGames();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRemoveGame = (id) => gamesApi.removeGame(id);
  
  const renderGames = () => {
    if (!games || !games.length) return;
    return games.map((game) => (
      <GameItem key={game.id} game={game} handleRemoveGame={handleRemoveGame} />
    ));
  };

  return <Row className="admin__games">{renderGames()}</Row>;
};
export default Games;
