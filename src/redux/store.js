import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slice/todoSlice";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
