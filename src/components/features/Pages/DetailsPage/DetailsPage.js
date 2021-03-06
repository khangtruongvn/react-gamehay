import { Breadcrumb, Button, Col, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import gamesApi from "../../../../apis/gamesApi";
import { transToUp } from "../../../../utils/transToUp";
import HighlighGame from "../../../common/HightLight/HightlightGame";
import Comments from "./components/Comments";

const DetailsPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const navigationRef = useRef(null);
  const [game, setGame] = useState({});
  const theme = useSelector((state) => state.theme);
  const [visibleNaviga, setVisibleNaviga] = useState(false);
  const [visileComments, setVisibleComments] = useState(false);
  const { name, image, info, tutorials, category_code, link, image_demo } =
    game;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    navigator.clipboard.writeText(link);
    alert("Copied: ");
  };

  useEffect(() => {
    if (visibleNaviga === true) {
      navigationRef.current.style.transform = "translateX(0)";
    } else {
      navigationRef.current.style.transform = "translateX(100%)";
    }
  }, [visibleNaviga]);

  return (
    <Row className={`content__detailspage ${theme}`} gutter={[30]}>
      <Col lg={{ span: 16 }} sm={{ span: 24 }}>
        <Breadcrumb className="details__breadcrumb">
          <Breadcrumb.Item onClick={() => history.push("/")}>
            Trang ch???
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
        <h1 className="details__title" id="info">
          Th??ng tin c?? b???n:
        </h1>
        <div className="details__info">
          <p className="info__desc">{info}</p>
        </div>
        <div className="details__image-demo">{renderImageDemo()}</div>
        <h1 className="details__title" id="download">
          T???i game:
        </h1>
        <div className="details__download">
          <div className="download__file">.rar</div>
          <h3 className="download__src">{link}</h3>
          <p
            title="Nh???n ????? copy link"
            className="download__btn"
            onClick={handleCopySrc}
          >
            <i className="download__btn-icon fas fa-copy"></i>
          </p>
        </div>
        <div className="details__tutorials">{renderTutorials()}</div>
        <Button
          className="comment__btn"
          onClick={() => setVisibleComments(true)}
        >
          ????ng nh???p x??t
        </Button>
      </Col>
      <Col lg={{ span: 8 }} sm={{ span: 24 }}>
        <HighlighGame />
      </Col>
      <div
        className="details__navigation-button"
        onClick={() => setVisibleNaviga(true)}
      >
        <i className="fas fa-directions"></i>
      </div>
      <Col lg={{ span: 7 }} className="details__navigation" ref={navigationRef}>
        <div className="heading">
          <h3 className="heading-text">Table of content</h3>
          <div className="icon" onClick={() => setVisibleNaviga(false)}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <a className="link" href="#info">
          1. Th??ng tin c?? b???n
        </a>
        <a className="link" href="#download">
          2. T???i game
        </a>
      </Col>
      <Comments
        theme={theme}
        gameId={Number(id)}
        visileComments={visileComments}
        setVisibleComments={setVisibleComments}
      />
    </Row>
  );
};
export default DetailsPage;
