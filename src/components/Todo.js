import React from "react";
import { useSelector } from "react-redux"; //use to read the data
import { useDispatch } from "react-redux"; //wireing
import { removeTodo } from "../features/todo/todoSlice";
export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);
  return (
    <div>
      <div className="mt-8 font-extrabold ">Todos</div>
      {todos.map((todo) => (
        <ul className="list-none ml-9 mr-9">
          {todos.map((todo) => (
            <li
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
              key={todo.id}
            >
              <div className="text-white">{todo.text}</div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
