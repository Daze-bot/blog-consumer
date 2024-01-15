import { useEffect, useState } from "react";

const Posts = () => {
  const [allPosts, setAllPosts] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/posts', {
      mode:'cors'
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAllPosts(data.data);
      });
  }, []);

  return (
    <div className="posts">
      {/* {allPosts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
      ))} */}
      Posts
    </div>
  )
};

export default Posts;
