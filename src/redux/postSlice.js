import { createSlice } from "@reduxjs/toolkit";
import { POSTS } from "./DummyData";

//createSliceを使ったら reducer を作成するだけで自動的に action type も定義してくれるし action creator も生成してくれます。

export const postSlice = createSlice({
  name: "posts", //name -> action type の prefix
  initialState: { value: POSTS },
  reducers: {
    addPost: (state, action) => {
      console.log(action);
      state.value.push(action.payload);
    },
    deletePost: (state, action) => {
      state.value = state.value.filter(p => p.id !== action.payload.id);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;

