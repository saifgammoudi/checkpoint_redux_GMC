import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteToDo,
  completeToDo,
  editableTodo,
  editTodo,
} from "./js/actions/action";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(todo.text);

  const editor = () => {
    dispatch(
      editTodo({ id: todo.id, selected: input, isComplete: todo.isComplete }),
      handleClose()
    );
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  {
    console.log(input);
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div class="col px-1 m-1 d-flex align-items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editor}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div class="row mx-1 px-5 pb-3 w-80">
        <div class="col mx-auto">
          <div class="row px-3 align-items-center todo-item rounded">
            <div class="col-auto m-1 p-0 d-flex align-items-center">
              <h2 class="m-0 p-0">
                <i
                  class="fa fa-check-square-o text-primary btn m-0 p-0 icon"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Mark as todo"
                  onClick={() => dispatch(completeToDo(todo.id))}
                ></i>
              </h2>
            </div>
            <div class="col px-1 m-1 d-flex align-items-center">
              <input
                type="text"
                className={
                  todo.isComplete
                    ? " form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3 done"
                    : "undone form-control-lg form-control border-0 bg-transparent rounded px-3 edit-todo-input"
                }
                readonly
                value={todo.text}
              />
            </div>
            <div class="col-auto m-1 p-0 px-3 d-none"></div>
            <div class="col-auto m-1 p-0 todo-actions">
              <div class="row d-flex align-items-center justify-content-end">
                <h5 class="m-0 p-0 px-2">
                  <i
                    class="fa fa-pencil text-info btn m-0 p-0 icon"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Edit todo"
                    onClick={handleShow}
                  ></i>
                </h5>
                <h5 class="m-0 p-0 px-2">
                  <i
                    class="fa fa-trash-o text-danger btn m-0 p-0 icon"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Delete todo"
                    onClick={() => dispatch(deleteToDo(todo.id))}
                  ></i>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {console.log(todo)}

      {/* {todo.editable ? (
        <>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={editor}>save</button>
          <button onClick={editables}>cancel</button>
          <button onClick={() => dispatch(deleteToDo(todo.id))}>Delete</button>
        </>
      ) : (
        <>
          <p className={todo.isComplete ? "Done" : "undone"}>{todo.text}</p>
          <button onClick={() => dispatch(completeToDo(todo.id))}>
            {todo.isComplete ? "Undo" : "isComplete"}
          </button>
          <button onClick={editables}>edit</button>
          <button onClick={() => dispatch(deleteToDo(todo.id))}>Delete</button>
        </>
      )}{" "}
      {console.log(todo)} */}
    </div>
  );
};

/*return (
    <div>
      <p className={todo.isComplete ? "Done" : undefined}>{todo.name}</p>
      <button onClick={() => dispatch(deleteToDo(todo.id))}>Delete</button>
      <button onClick={() => dispatch(completeToDo(todo.id))}>
        {todo.isComplete ? "Undo" : "isComplete"}
      </button>
      <button>Edit</button>
    </div>
  );
};*/
export default TodoItem;
