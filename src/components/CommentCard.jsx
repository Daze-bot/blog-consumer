import moment from "moment";

const CommentCard = ({comment}) => {
  const formattedDate = moment(comment.dateAdded).format('MMM D, YYYY');

  return (
    <div>
      <div className="user-comment">
        <h3>{comment.name}</h3>
        <p>Created: {formattedDate}</p>
        <p>{comment.text}</p>
      </div>
    </div>
  )
};

export default CommentCard;
