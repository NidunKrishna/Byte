import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  margin-top: 20px;
  list-style-type: none;
`

export const Avatar = styled.p`
position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NameAndCommentContainer = styled.div`
  margin-left: 12px;
`

export const NameText = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 0px;
`

export const CommentText = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 12px;
`

export const HorizontalLine = styled.hr`
  border: 1px solid #cbd5e140;
`