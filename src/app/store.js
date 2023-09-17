import { configureStore } from "@reduxjs/toolkit"; //need
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
  //reducer is just it is an object
});
 