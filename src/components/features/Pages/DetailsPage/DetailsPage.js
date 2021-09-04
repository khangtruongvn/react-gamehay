import { Breadcrumb, Button, Col, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import gamesApi from "../../../../apis/gamesApi";
import { transToUp } from "../../../../utils/transToUp";
import HighlighGame from "../../../common/HightLight/HightlightGame";
const DetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [game, setGame] = useState({});
  const theme = useSelector((state) => state.theme);
  const { name, image, info, tutorials, category_code, link, image_demo } =
    game;

  useEffect(() => {
    const fetchDetailsGame = async () => {
      try {
        const response = await gamesApi.getDetails(id);
        setGame(response);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchDetailsGame();
  }, [id]);

  const renderTutorials = () => {
    if (!tutorials || !tutorials.length) return;
    return tutorials.map((tutorial, index) => (
      <p className="tutorials" key={index}>
        {tutorial}
      </p>
    ));
  };

  const renderImageDemo = () => {
    if (!image_demo || !image_demo.length) return;
    return image_demo.map((image, index) => (
      <div className="image-demo__item" key={index}>
        <img className="image-demo__src" src={image} />
      </div>
    ));
  };

  const handleCopySrc = () => {
    const srcCopy = link;
    navigator.clipboard.writeText(srcCopy);
    alert("Copied");
  };

  return (
    <Row className={`content__detailspage ${theme}`} gutter={[30]}>
      <Col lg={{ span: 16 }} sm={{ span: 24 }}>
        <Breadcrumb className="details__breadcrumb">
          <Breadcrumb.Item onClick={() => history.push("/")}>
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item
            onClick={() => history.push(`/games/${category_code}`)}
          >
            {transToUp(category_code)}
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="details__name">{name}</h1>
        <div className="details__banner">
          <img src={image} className="details__banner-src" alt={name} />
        </div>
        <h1 className="details__title">Thông tin cơ bản:</h1>
        <div className="details__info">
          <p className="info__desc">{info}</p>
        </div>
        <div className="details__image-demo">{renderImageDemo()}</div>
        <h1 className="details__title">Tải game:</h1>
        <div className="details__download">
          <div className="download__file">.rar</div>
          <h3 className="download__src">{link}</h3>
          <p
            title="Nhấn để copy link"
            className="download__btn"
            onClick={handleCopySrc}
          >
            <i className="download__btn-icon fas fa-copy"></i>
          </p>
        </div>
        <div className="details__tutorials">{renderTutorials()}</div>
        <Button className="comment__btn">Đăng nhập xét</Button>
      </Col>
      <Col lg={{ span: 8 }} sm={{ span: 24 }}>
        <HighlighGame />
      </Col>
    </Row>
  );
};
export default DetailsPage;
