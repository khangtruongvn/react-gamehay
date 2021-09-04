import { Row, Col, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import GameList from "../../../common/Games/GameList";
import gamesApi from "../../../../apis/gamesApi";
import { useSelector } from "react-redux";
const SearchPage = () => {
  const { keyword } = useParams();
  const [games, setGames] = useState([]);
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    const params = {
      name_like: keyword,
    };
    const fetchGames = async () => {
      try {
        const response = await gamesApi.getAll(params);
        setGames(response);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchGames();
  }, [keyword]);

  return (
    <Row className={`content__searchpage ${theme}`}>
      <Col lg={{ span: 16 }} sm={{ span: 24 }}>
        <div className="searchpage__message">
          <p>
            Tìm kiếm: <span>{keyword}</span>
          </p>
        </div>
        <GameList games={games} />
        <div className="searchpage__loadmore">
          <Button type="primary">
            {games.length ? "Tải thêm" : "Không có dữ liệu"}
          </Button>
        </div>
      </Col>
      <Col lg={{ span: 8 }} sm={{ span: 24 }}></Col>
    </Row>
  );
};
export default SearchPage;
