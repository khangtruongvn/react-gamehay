import { Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import commentsApi from "../../../../../apis/commentsApi";
import avatar_image from "../../../../../resource/images/user1.png";
import CommentItem from "./CommentItem";
import { checkEmptyObject } from "../../../../../utils/checkEmptyObject";
const Comments = (props) => {
  const { gameId, theme, visileComments, setVisibleComments } = props;
  const [form] = Form.useForm();
  const [comments, setComments] = useState([]);
  const currentUser = useSelector((state) => state.user.data);
  useEffect(() => {
    const params = {
      gameId: gameId,
    };
    const fetchComments = async () => {
      try {
        const response = await commentsApi.getComments(params);
        setComments(response);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchComments();
  }, []);

  const handleOnOk = () => {
    const content = form.getFieldValue().content;
    if (checkEmptyObject(currentUser) || !content)
      return alert("Bạn chưa đăng nhập");

    const data = {
      content: content,
      gameId: gameId,
      user: { id: currentUser.id, name: currentUser.name, avatar_image },
    };

    handlePostComment(data);

    form.setFieldsValue({
      content: undefined,
    });

    // setVisibleComments(false);
  };

  const handlePostComment = (data) => {
    const post = async () => {
      try {
        const response = await commentsApi.postComment(data);
        setComments([...comments, response]);
      } catch (error) {
        console.log(error);
      }
    };
    post();
  };

  const renderComments = () => {
    if (!comments || !comments.length) return;
    return comments.map((comment) => (
      <CommentItem
        key={comment.id}
        comment={comment}
        currentUser={currentUser}
      />
    ));
  };

  return (
    <Modal
      okText="Đăng"
      cancelText="Hủy"
      title="Đăng nhận xét"
      onOk={handleOnOk}
      visible={visileComments}
      className={`comments ${theme}`}
      onCancel={() => setVisibleComments(false)}
    >
      <ul className="comments__list">{renderComments()}</ul>
      <Form form={form}>
        <Form.Item name="content">
          <Input.TextArea
            rows={4}
            className="comments__input"
            placeholder="Nhập nhận xét của bạn..."
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default Comments;
