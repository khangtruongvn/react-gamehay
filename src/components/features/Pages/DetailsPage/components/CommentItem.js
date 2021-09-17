import { Button, Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import subCommentsApi from "../../../../../apis/subCommentsApi";
import avatar_image from "../../../../../resource/images/user1.png";
import { checkEmptyObject } from "../../../../../utils/checkEmptyObject";
const CommentItem = ({ comment, currentUser }) => {
  const { id, user, content } = comment;
  const subCommentsRef = useRef(null);
  const inputSubCommentRef = useRef(null);
  const [subComments, setSubComments] = useState([]);
  const [visibleSubComments, setVisibleSubComments] = useState(false);

  useEffect(() => {
    const fetchSubComments = async () => {
      try {
        const response = await subCommentsApi.getAll({ commentId: id });
        setSubComments(response);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchSubComments();
  }, []);

  useEffect(() => {
    if (visibleSubComments === true) {
      subCommentsRef.current.style.display = "block";
    } else {
      subCommentsRef.current.style.display = "none";
    }
  }, [visibleSubComments]);

  const handleToggleSubComments = () => {
    setVisibleSubComments(!visibleSubComments);
  };

  const handlePostSubComment = () => {
    const content = inputSubCommentRef.current.state.value;
    if (checkEmptyObject(currentUser) || !content)
      return alert("Bạn chưa đăng nhập");

    const data = {
      user: { id: currentUser.id, name: currentUser.name, avatar_image },
      commentId: id,
      content: content,
    };
    
    subCommentsApi.postComment(data);
    setSubComments([...subComments, data]);
  };

  const renderSubComments = () => {
    if (!subComments || !subComments.length) return;
    return subComments.map((subComments) => (
      <li className="sub-comments__item" key={subComments.id}>
        <img className="item__avt" src={subComments.user.avatar_image} />
        <div>
          <h3 className="item__name">{subComments.user.name}</h3>
          <p className="item__content">{subComments.content}</p>
        </div>
      </li>
    ));
  };

  return (
    <li className="comments__item">
      <div className="item__group">
        <img className="item__avt" src={user.avatar_image} />
        <div>
          <h3 className="item__name">{user.name}</h3>
          <p className="item__content">{content}</p>
          <div className="item__reply" onClick={handleToggleSubComments}>
            <i class="reply__icon fas fa-reply"></i>
            <p>Reply</p>
          </div>
        </div>
      </div>

      <div className="item__group-reply" ref={subCommentsRef}>
        <ul className="item__sub-comments">{renderSubComments()}</ul>
        <div className="item__post-comment">
          <Input
            ref={inputSubCommentRef}
            className="post-comment__input"
            placeholder="Đăng nhận xét..."
          />
          <Button className="post-comment__btn" onClick={handlePostSubComment}>
            Đăng
          </Button>
        </div>
      </div>
    </li>
  );
};
export default CommentItem;
