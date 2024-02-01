import moment from "moment";

const CommentCard = ({comment}) => {
  const formattedDate = moment(comment.createdAt).format('MMM D, YYYY');

  return (
    <div>
      <div className="user-comment">
        <h3>{comment.name}</h3>
        <p className="comment-date">{formattedDate}</p>
        <p>{comment.text}</p>
      </div>
    </div>
  )
};

export default CommentCard;
