//help you to create big obj which you export and slice is responsible for tracking current state;
import { createSlice, nanoid } from "@reduxjs/toolkit"; //need
//nanoid is like a unique id

const initialState = {
  todos: [
   
  ], //array
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //two important things pass to the reducers one is state and other is action(through we can send some data(payload))
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo); //hey state in todos array push todo
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;

// useDispatch  talk to store using reducers
