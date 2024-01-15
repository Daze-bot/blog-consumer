import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const PostPage = () => {
  const params = useParams();
  const postID = params.postID;

  const [activePost, setActivePost] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/posts${postID}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setActivePost(data.data);
      });
  }, []);

  return (
    <div className="post-page">
      <p>{activePost.title}</p>
      <p>{activePost.text}</p>
    </div>
  )
};

export default PostPage;
