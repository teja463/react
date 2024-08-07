import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsApi, fetchPosts, getPosts, postSelector } from "./postSlice";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(postSelector);
  const status = useSelector((state) => state.post.status);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, []);

  return (
    <>
      <h2>Posts</h2>
      <h4>Status: <span className="text-uppercase">{status}</span></h4>
      <button onClick={()=> dispatch(fetchPosts())}>Refresh data</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
