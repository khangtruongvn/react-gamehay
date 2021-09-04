import { Breadcrumb, Button, Col, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import gamesApi from "../../../../apis/gamesApi";
import { transToUp } from "../../../../utils/transToUp";
import GameList from "../../../common/Games/GameList";

const GamePage = () => {
  const history = useHistory();
  const [games, setGames] = useState([]);
  const { category_code } = useParams();
  const [totalRows, setTotalRows] = useState(0);
  const prevCategoryCode = useRef(category_code);
  const [currentPage, setCurrentPage] = useState(1);
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    prevCategoryCode.current = category_code;
    setCurrentPage(1);
  }, [category_code]);

  useEffect(() => {
    const params = {
      _page: currentPage,
      _limit: 6,
      category_code: category_code,
    };
    const fetchGames = async () => {
      try {
        const response = await gamesApi.getAll(params);
        // nếu page === 1 thì có sự thay đổi về category
        if (currentPage != 1) {
          setGames([...games, ...response.data]);
        } else {
          setGames(response.data);
        }
        setTotalRows(response.pagination._totalRows);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchGames();
  }, [category_code, currentPage]);

  return (
    <Row className={`content__gamespage ${theme}`}>
      <Col lg={{ span: 16 }} sm={{ span: 24 }}>
        <Breadcrumb className="gamespage__breadcrumb">
          <Breadcrumb.Item onClick={() => history.push("/")}>
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item>{transToUp(category_code)}</Breadcrumb.Item>
        </Breadcrumb>
        <GameList games={games} />
        <div className="gamespage__loadmore">
          <Button
            type="primary"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Tải thêm
          </Button>
        </div>
      </Col>
      <Col lg={{ span: 8 }} sm={{ span: 0 }}></Col>
    </Row>
  );
};
export default GamePage;
