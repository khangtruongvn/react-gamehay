import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import gameBanner from "../../../resource/images/Night-Attack-on-Little-Sis-Free-Download.jpg";
import gamesApi from "../../../apis/gamesApi";
import { Spin } from "antd";
import GameHightLightItem from "./components/GameHightLightItem";
const HighLightGame = () => {
  const theme = useSelector((state) => state.theme);
  const [gamesHightlight, setGameHightlight] = useState([]);
  useEffect(() => {
    const params = {
      _page: 1,
      _limit: 5,
    };
    const fetchGames = async () => {
      try {
        const response = await gamesApi.getAll(params);
        setGameHightlight(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchGames();
  }, []);

  const renderGames = () => {
    if (!gamesHightlight || !gamesHightlight.length) return <Spin />;
    return gamesHightlight.map((game, index) => (
      <GameHightLightItem key={game.id} game={game} index={index} />
    ));
  };

  return (
    <div className={`game__hightlight ${theme}`}>
      <h3 className="homepage__title">Xem nhiều trong tuần</h3>
      <div className="hightlight__banner">
        <img
          src={gamesHightlight[0] && gamesHightlight[0].image}
          className="hightlight__banner-src"
        />
      </div>
      <ul className="hightligh__list">{renderGames()}</ul>
    </div>
  );
};
export default HighLightGame;
