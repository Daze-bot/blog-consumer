import { useState } from "react";

const NewComment = ({postID}) => {
  const [data, setData] = useState({
    commentName: "",
    commentText: "",
    postID: postID
  });

  const handleSubmit = () => {
    fetch(`https://daze-blog-api.fly.dev/posts/${postID}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        return res.json();
      });
  };

  const handleChange = (event) => {
    const newData = {...data}
    if (event.target.name === "commentName") {
      newData.commentName = event.target.value;
      setData(newData);
    } else if (event.target.name === "commentText") {
      newData.commentText = event.target.value;
      setData(newData);
    }
  }

  return (
    <div className="new-comment">
      <h3>Add New Comment</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="commentName">Name</label>
        <input
          required
          name="commentName"
          id="commentName"
          type="text"
          value={data.commentName}
          onChange={handleChange}
          maxLength="25"
        ></input>
        <label htmlFor="commentText">Comment</label>
        <textarea
          required
          name="commentText"
          id="commentText"
          rows="5"
          maxLength="1400"
          value={data.commentText}
          onChange={handleChange}
          placeholder="Type your comment here"
        >
        </textarea>
        <button type="submit">Publish</button>
      </form>
    </div>
  )
};

export default NewComment;
