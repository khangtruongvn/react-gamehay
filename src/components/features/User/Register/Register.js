import { Button, Form, Input, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postUser } from "../../../../slices/usersSlice";
import { checkExited } from "../../../../utils/checkAccount";

const Register = () => {
  const users = useSelector((state) => state.users.data);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleOnFinish = ({ name, username, password }) => {
    const exited = checkExited(users, username);
    if (!exited) {
      dispatch(postUser({ name, username, password }));
      history.push("/login");
    } else {
      alert("Tên đăng nhập tồn tại");
    }
  };
  const handleOnFinished = (error) => {
    console.log(error);
  };
  return (
    <Row className="app__login">
      <div className="login__group">
        <h1 className="login__heading">Đăng kí tài khoản</h1>
        <Form
          name="basic"
          autoComplete="off"
          className="login__form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={handleOnFinish}
          onFinishFailed={handleOnFinished}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Name"
            name="name"
            className="form__item"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
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
          <Form.Item
            className="form__item"
            label="Confirm password"
            name="confirm_password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Đăng kí
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Row>
  );
};
export default Register;
