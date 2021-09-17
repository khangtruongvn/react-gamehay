import { Button, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../../slices/userSlice";
const UserPage = () => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logoutUser());
  const user = useSelector((state) => state.user.data);
  return (
    <Row className="content__userpage">
      <div className="userpage__box">
        <div className="userpage__heading">
          <h1 className="heading__text">My account</h1>
          <Button onClick={handleLogout} className="heading__btn">
            Đăng xuất
          </Button>
        </div>
        <div className="heading__info">
          <h3 className="info__item">Name: {user.name}</h3>
          <h3 className="info__item">Username: {user.username}</h3>
          <h3 className="info__item">Password: {user.password}</h3>
        </div>
      </div>
    </Row>
  );
};
export default UserPage;
