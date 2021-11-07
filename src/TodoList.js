import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Button } from "react-bootstrap";
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [all, setAll] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [active, setActive] = useState(false);
  console.log("completed : " + completed);
  console.log("active : " + active);
  console.log("all : " + all);

  const handleCompleted = () => {
    setCompleted(!completed);
    setActive(false);
    setAll(false);
  };
  const handleActive = () => {
    setActive(!active);
    setCompleted(false);
    setAll(false);
  };
  const handleAll = () => {
    setAll(!all);
    setActive(false);
    setCompleted(false);
  };
  return (
    <div>
      {" "}
      <div class="p-2 mx-4 border-black-25 border-bottom"></div>
      <div class="row m-1 p-3 px-5 justify-content-end">
        <div class="col-auto d-flex align-items-center">
          <Button variant="outline-info" onClick={handleCompleted}>
            show completed
          </Button>{" "}
          <Button variant="outline-info" onClick={handleActive}>
            show active
          </Button>{" "}
          <Button variant="outline-info" onClick={handleAll}>
            show all
          </Button>{" "}
        </div>{" "}
        {completed
          ? todos
              .filter((elem) => elem.isComplete === true)
              .map((el) => <TodoItem todo={el} />)
          : active
          ? todos
              .filter((elem) => elem.isComplete === false)
              .map((el) => <TodoItem todo={el} />)
          : all
          ? todos.map((el) => <TodoItem todo={el} />)
          : todos.map((el) => <TodoItem todo={el} />)}
      </div>
    </div>
  );
};

export default TodoList;
