import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import gamesApi from "../../../../apis/gamesApi";
import { randomNumber } from "../../../../utils/randomNumber";
import GameList from "../../../common/Games/GameList";
import HighLightGame from "../../../common/HightLight/HightlightGame";
import HomePageTop from "./components/HomePageTop";
import { changeForm } from "../../../../slices/formSlice";
const HomePage = () => {
  const dispatch = useDispatch();
  const [games, setGames] = useState([]);
  const [totalRows, setTotalRows] = useState(null);
  const [gameRandom, setGameRandom] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const theme = useSelector((state) => state.theme);
  const formMode = useSelector((state) => state.form);

  
  useEffect(() => {
    const params = {
      _page: currentPage,
      _limit: 6,
    };
    const fetchGames = async () => {
      try {
        const response = await gamesApi.getAll(params);
        setGames([...games, ...response.data]);
        setTotalRows(response.pagination._totalRows);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchGames();
  }, [currentPage]);

  useEffect(() => {
    if (!totalRows) return;
    const indexRandom = randomNumber(1, totalRows);
    const fetchGame = async () => {
      try {
        const response = await gamesApi.getDetails(indexRandom);
        setGameRandom(response);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchGame();
  }, [totalRows]);

  const handleChangeForm = () => {
    if (formMode === "grid") {
      dispatch(changeForm("list"));
    } else {
      dispatch(changeForm("grid"));
    }
  };

  return (
    <Row className={`content__homepage ${theme}`}>
      <Col lg={{ span: 16 }} sm={{ span: 24 }}>
        <HomePageTop gameRandom={gameRandom} />
        <div className="homepage__heading">
          <h3 className="homepage__title">Bài đăng mới nhất</h3>
          <div className="changeform__btn" onClick={handleChangeForm}>
            {formMode === "grid" ? "List" : "Grid"}
            <i
              className={`changeform__icon ${
                formMode === "grid" ? "fas fa-list" : "fas fa-th"
              }`}
            ></i>
          </div>
        </div>

        <GameList games={games} />
        <div className="homepage__loadmore">
          <Button
            type="primary"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Tải thêm
          </Button>
        </div>
      </Col>
      <Col lg={{ span: 8 }} sm={{ span: 24 }}>
        <HighLightGame />
      </Col>
    </Row>
  );
};
export default HomePage;
