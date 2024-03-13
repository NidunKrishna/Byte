import { useState } from 'react';
import CommentItem from '../commentItem';
import { v4 as uuidv4 } from 'uuid';
import {
  CommentsContainer,
  CommentButton,
  CommentsTitle,
  CommentTextInput,
  Form,
  NameInput,
  CommentsList
} from './style';

const Comments = () => {
  const [name, setName] = useState('');
  const onChangeName = (event) => { setName(event.target.value); };
  const [comments, setComments] = useState('');
  const onChangeComments = (event) => { setComments(event.target.value); };
  const [comment, setComment] = useState({ name: '', comments: '' });
  const [commentList, setCommentList] = useState([]);

  // const commentText = {
  //   name,
  //   comments
  // };

  const onAddComment = (event) => {
    const newComment = {
      id: uuidv4(),
      name,
      comments
    };
    event.preventDefault();
    setComment({ name, comments });
    setCommentList((prevCommentList) => [...prevCommentList, newComment]);
  };

  return (
    <CommentsContainer>
      <CommentsTitle>DISCUSSION FORUM</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput type="text" placeholder="Your name" onChange={onChangeName} />
        <CommentTextInput placeholder="Your comment" rows="3" onChange={onChangeComments} />
        <CommentButton type="submit">Your Comment</CommentButton>
      </Form>
      <CommentItem commentDetails={comment} />
      <CommentsList>
        {commentList.map((eachComment) => (
          <CommentItem commentDetails={eachComment} key={eachComment.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  );
};

export default Comments;
