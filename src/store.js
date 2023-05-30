import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";
import chatReducer from "./Components/Redux/Reducer";
import authReducer from "./Components/Redux/authReducer";

const store = configureStore({
  reducer: {
    chatReducer,
    authReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false, // Disable the default serializable check
  }),
});

export default store;
