import React from "react";
import { useHistory } from "react-router-dom";
const GameItem = (props) => {
  const { game, handleRemoveGame } = props;
  const history = useHistory();
  const { image, category_code, info, name, id } = game;
  return (
    <div className="game__item">
      <div className="game__item-group">
        <div className="game__img">
          <div
            className="game__img-src"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="game__info">
          <p className="game__info-category">
            Thể loại
            <a className="game__info-category-link">{category_code}</a>
          </p>
          <a className="game__info-name">{name}</a>
        </div>
        <div className="game__control">
          <div
            className="control__btn"
            onClick={() => history.push(`/admin/edit/${id}`)}
          >
            <i className="control__btn-icon fas fa-edit"></i>
          </div>
          <div className="control__btn" onClick={() => handleRemoveGame(id)}>
            <i className="control__btn-icon fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameItem;
