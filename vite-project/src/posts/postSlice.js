import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    status: "",
  },
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export function getPostsApi() {
  return async dispatch => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = response.data.slice(0, 10);
      dispatch(getPosts(data));
    } catch (e) {
      console.log('dipatching failed case')
      dispatch(getPosts([]));
    }
  };
}

export const postSelector = (state) => state.post.posts;

export const { getPosts } = postSlice.actions;
export default postSlice.reducer;
