// Reducer.js
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = { isLogin: false , chatWindow : false , activeUser : null };

export const chatReducer = createSlice({
  name: "chatReducer",
  initialState: INITIAL_STATE,

  reducers: {
    LogIN: (state, action) => {
      state.isLogin = action.payload;
    },
    ChatWindow : (state, action) =>{
      state.chatWindow = action.payload;
      state.activeUser = action.payload;
    }
  },
});

export const { LogIN , ChatWindow } = chatReducer.actions; // Export LogIN action

// Exporting selector
export const chatSelector = (state) => state.chatReducer;

export default chatReducer.reducer;
