import { Row } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import gamesApi from "../../../../../apis/gamesApi";
import AddEditForm from "./AddEditForm";
const AddEdit = () => {
  const { gameId } = useParams();
  const isAdding = !gameId;
  const history = useHistory();
  const [game, setGame] = useState({});
  const initialValues = isAdding ? {} : game;
  const categories = useSelector((state) => state.categories.data);

  useEffect(() => {
    if (isAdding) return;
    const fetchGame = async () => {
      try {
        const response = await gamesApi.getDetails(Number(gameId));
        setGame(response);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchGame();
  }, [isAdding]);

  const handleFinishForm = (game) => {
    const id = parseInt(gameId);
    if (isAdding) {
      addGame(game);
    } else {
      editGame(id, game);
    }
    history.push("/admin");
  };

  const addGame = (data) => {
    gamesApi.postGame(data);
  };
  const editGame = (id, data) => {
    gamesApi.editGame(id, data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Row>
      <AddEditForm
        id={Number(gameId)}
        isAdding={isAdding}
        categories={categories}
        initialValues={initialValues}
        handleFinishForm={handleFinishForm}
      />
    </Row>
  );
};
export default AddEdit;
