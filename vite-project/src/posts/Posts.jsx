import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsApi, postSelector } from "./postSlice";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(postSelector);
  useEffect(() => {
    dispatch(getPostsApi());
  }, []);

  return (
    <>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
