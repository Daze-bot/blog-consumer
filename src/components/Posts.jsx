import { useEffect, useState } from "react";
import PostSample from "./PostSample";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch('https://daze-blog-api.fly.dev/posts', {
      mode:'cors'
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllPosts(data.data);
      });
  }, []);

  return (
    <div className="posts">
      {allPosts.map((post) => {
        return <PostSample 
          post={post}
          key={post._id}
        />
      })}
    </div>
  )
};

export default Posts;
