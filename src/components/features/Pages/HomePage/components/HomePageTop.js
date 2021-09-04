import React from "react";
import { Row, Col } from "antd";
import { transToUp } from "../../../../../utils/transToUp";
import { useHistory } from "react-router-dom";
const HomePageTop = ({ gameRandom }) => {
  const history = useHistory();
  const { image, name, category_code, info, id } = gameRandom;
  const handleToDetails = () => history.push(`/games/${category_code}/${id}`);
  return (
    <>
      <h3 className="homepage__title">Game nổi bật</h3>
      <Row className="homepage__gamehot">
        <Col sm={{ span: 12 }} xs={{ span: 24 }} className="gamehot__img">
          <img
            src={image}
            className="gamehot__img-src"
            onClick={handleToDetails}
          />
        </Col>
        <Col sm={{ span: 12 }} xs={{ span: 24 }} className="gamehot__info">
          <p className="gamehot__category">
            Thể loại
            <a
              className="gamehot__category-link"
              onClick={() => history.push(`/games/${category_code}`)}
            >
              {transToUp(category_code)}
            </a>
          </p>
          <h2 className="gamehot__name" onClick={handleToDetails}>
            {name}
          </h2>
          <p className="gamehot__desc">{info}</p>
        </Col>
      </Row>
    </>
  );
};
export default HomePageTop;
