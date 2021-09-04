import { Breadcrumb, Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import gamesApi from "../../../../apis/gamesApi";
import { changeForm } from "../../../../slices/formSlice";
import { transToUp } from "../../../../utils/transToUp";
import GameList from "../../../common/Games/GameList";

const GamePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [games, setGames] = useState([]);
  const { category_code } = useParams();
  const [totalRows, setTotalRows] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const theme = useSelector((state) => state.theme);
  const formMode = useSelector((state) => state.form);

  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo(0, 0);
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

  const handleChangeForm = () => {
    if (formMode === "grid") {
      dispatch(changeForm("list"));
    } else {
      dispatch(changeForm("grid"));
    }
  };
  return (
    <Row className={`content__gamespage ${theme}`}>
      <Col lg={{ span: 16 }} sm={{ span: 24 }}>
        <div className="gamespage__heading">
          <Breadcrumb className="gamespage__breadcrumb">
            <Breadcrumb.Item onClick={() => history.push("/")}>
              Trang chủ
            </Breadcrumb.Item>
            <Breadcrumb.Item>{transToUp(category_code)}</Breadcrumb.Item>
          </Breadcrumb>
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
