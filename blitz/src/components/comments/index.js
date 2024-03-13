import React, { useState } from 'react';
import CommentItem from '../commentItem';
import {
    CommentsContainer,
    CommentButton,
    CommentsTitle,
    CommentTextInput,
    Form,
    NameInput
} from './style';
import axios from 'axios';

const Comments = () => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const onChangeName = (event) => {
        setName(event.target.value);
    };

    const onChangeComment = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8081/push', { name, comment });
            console.log('Data inserted');
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    };

    return (
        <CommentsContainer>
            <CommentsTitle>DISCUSSION FORUM</CommentsTitle>
            <Form onSubmit={handleSubmit}>
                <NameInput type="text" placeholder="Your name" value={name} onChange={onChangeName} />
                <CommentTextInput placeholder="Your comment" rows="3" value={comment} onChange={onChangeComment} />
                <CommentButton type="submit">Your Comment</CommentButton>
            </Form>
            <CommentItem commentDetails={{ name, comment }} />
        </CommentsContainer>
    );
};

export default Comments;
