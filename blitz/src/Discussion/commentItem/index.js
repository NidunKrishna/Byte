import {
  ListItem,
  Avatar,
  NameAndCommentContainer,
  NameText,
  CommentText,
  HorizontalLine,
} from './style'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, comments} = commentDetails

  return (
    <>
      <ListItem>
        {name && <Avatar><img style={{backgroundSize:'cover',height:'10vh',width:'10vh'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXB1Hz7nWRW5hFyMu_8B5HKzVbnox3gvk6rukm037sG2gDj-bqFGoz364hruDKaTyQJI&usqp=CAU" alt="User Avatar" />
        </Avatar>}
        <NameAndCommentContainer>
          <NameText>{name}</NameText>
          <CommentText>{comments}</CommentText>
        </NameAndCommentContainer>
      </ListItem>
      <HorizontalLine />
    </>
  )
}

export default CommentItem
