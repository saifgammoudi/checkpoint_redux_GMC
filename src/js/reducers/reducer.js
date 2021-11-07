import {
  ADD_TO_DO,
  DELETE_TO_DO,
  COMPLETE_TO_DO,
  EDIT_TODO,
  EDITABLE,
} from "../constantes/actionTypes";

const initialState = {
  todos: [
    { id: 1, text: "task 1", isComplete: false, editable: false },
    { id: 2, text: "task 2", isComplete: false, editable: false },
    { id: 3, text: "task 3", isComplete: false, editable: false },
  ],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TO_DO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case COMPLETE_TO_DO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                text: action.payload.selected,
                editable: !todo.editable,
              }
            : todo
        ),
      };
    case EDITABLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, editable: !todo.editable }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default TodoReducer;
