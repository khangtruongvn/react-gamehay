import React from "react";
import { useHistory } from "react-router-dom";
import { transToUp } from "../../../utils/transToUp";
const GameItem = (props) => {
  const { game } = props;
  const history = useHistory();
  const { id, category_code, image, name, info } = game;

  const handleToCategory = (code) => {
    history.push(`/games/${code}`);
  };

  const handleToDetails = () => {
    history.push(`/games/${category_code}/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="game__item">
      <div className="game__img" onClick={handleToDetails}>
        <div
          className="game__img-src"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <div className="game__info">
        <p className="game__info-category">
          Thể loại
          <a
            className="game__info-category-link"
            onClick={() => {
              handleToCategory(category_code);
            }}
          >
            {transToUp(category_code)}
          </a>
        </p>
        <a className="game__info-name" onClick={handleToDetails}>
          {name}
        </a>
        <p className="game__info-desc">{info}</p>
        <p className="game__info-create">tháng 8 31, 2021</p>
      </div>
    </div>
  );
};
export default GameItem;
