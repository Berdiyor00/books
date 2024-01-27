// import { combineReducers } from 'redux';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = (allbooks) => {
  const thunk = createAsyncThunk("user/fetchData", async () => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${allbooks}&key=AIzaSyDDBX_5oQxSd-tFBfV5SFeusGDgx10V8xo`
    );
    return response.data;
  });
  return thunk;
};

export const fetchSwiperData = (allbooks) => {
  const thunk = createAsyncThunk("user/fetchSwiperData", async () => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${allbooks}&key=AIzaSyDDBX_5oQxSd-tFBfV5SFeusGDgx10V8xo`
    );
    return response.data;
  });
  return thunk;
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    swiperData: [],
  },
  reducers: {},
  extraReducers: (build) => {
    build
      // .addCase(fetchData.pending, (state) => {
      //   state.loading = true;
      // })
      .addCase(fetchData().fulfilled, (state, action) => {
        state.users = action.payload.items;
      })
      .addCase(fetchSwiperData().fulfilled, (state, action) => {
        state.swiperData = action.payload.items;
      });
    // .addCase(fetchData.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});

export default userSlice.reducer;
