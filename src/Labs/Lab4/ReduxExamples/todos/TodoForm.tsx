// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        value={todo.title}
        className="form-control me-2"
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
      <button
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
        className="btn btn-warning ms-1 me-1"
      >
        {" "}
        Update{" "}
      </button>
      <button
        onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click"
        className="btn btn-success"
      >
        {" "}
        Add{" "}
      </button>
    </li>
  );
}
