import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div className="App">
      <div className="main">
        <AddTodo />
        <Todo />
      </div>
    </div>
  );
}

export default App;
