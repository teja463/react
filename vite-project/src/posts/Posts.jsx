import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsApi, fetchPosts, postSelector } from "./postSlice";

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
      <h4>Status: {status}</h4>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
