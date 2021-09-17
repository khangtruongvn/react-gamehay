import { Button, Checkbox, Form, Input, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { getUser } from "../../../../slices/userSlice";
import { checkLogin } from "../../../../utils/checkAccount";
const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.users.data);

  const handleOnFinish = ({ username, password }) => {
    const userId = checkLogin(users, username, password);
    if (userId) {
      dispatch(getUser(userId));
      history.push("/");
    } else {
      alert("sai username hoặc password");
    }
  };

  const handleOnFinished = () => {};
  return (
    <Row className="app__login">
      <div className="login__group">
        <h1 className="login__heading">Đăng nhập tài khoản</h1>
        <Form
          name="basic"
          layout="vertical"
          autoComplete="off"
          labelCol={{ span: 16 }}
          className="login__form"
          wrapperCol={{ span: 24 }}
          onFinish={handleOnFinish}
          onFinishFailed={handleOnFinished}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Username"
            name="username"
            className="form__item"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="form__item"
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <p className="form__register">
            Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
          </p>
          {/* <Form.Item
            className="form__item"
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Row>
  );
};
export default Login;
