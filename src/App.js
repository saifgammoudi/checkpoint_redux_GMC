import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

import "./App.css";
export default function App() {
  return (
    <div class="container m-5 p-2 rounded mx-auto bg-light shadow">
      <AddTodo />
      <TodoList />
    </div>
  );
}
