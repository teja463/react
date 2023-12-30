import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    status: "idle",
  },
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        console.log(action);
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        console.log(action);
        state.status = "done";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        console.log(action);
        state.status = `Failed ${action.error.message}`;
      });
  },
});

export function getPostsApi() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = response.data.slice(0, 10);
      dispatch(getPosts(data));
    } catch (e) {
      dispatch(getPosts([]));
    }
  };
}

export const fetchPosts = createAsyncThunk(
  "pots/getPostsAsyncThunk",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = response.data.slice(0, 10);
    return data;
  }
);

export const postSelector = (state) => state.post.posts;

export const { getPosts } = postSlice.actions;
export default postSlice.reducer;
