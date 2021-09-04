import React from "react";
import { useHistory } from "react-router";
const GameHightLightItem = ({ game, index }) => {
  const history = useHistory();
  const { name, category_code, id } = game;
  return (
    <li className="hightlight__item">
      <h1 className="number">{index + 1}</h1>
      <div>
        <p className="category">
          Thể loại
          <a
            className="category__link"
            onClick={() => history.push(`/games/${category_code}`)}
          >
            {category_code}
          </a>
        </p>
        <a
          className="name"
          onClick={() => history.push(`/games/${category_code}/${id}`)}
        >
          {name}
        </a>
      </div>
      <i className="icon fas fa-comment"></i>
    </li>
  );
};
export default GameHightLightItem;
