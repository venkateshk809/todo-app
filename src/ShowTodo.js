import React, { useState, useEffect } from "react";
import "./ShowTodo.css";

function ShowTodo({ todos, changeTypeOfTodo, editTodo, deleteTodo }) {
  const [editingId, setEditingId] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    setEditingId(0);
  }, [todos]);
  const editTodoHandler = (id, name) => {
    setEditingId(id);
    setName(name);
  };
  const onInputChange = (name) => {
    setName(name);
  };

  const SaveHandler = (id) => {
    editTodo(id, name);
    setEditingId(0);
  };
  const cancelHandler = () => {
    setEditingId(0);
  };
  return (
    <div className="todos">
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <label className="label">
            <div className="inputbutton">
              <input
                type="checkbox"
                defaultChecked={todo.done}
                onChange={() => changeTypeOfTodo(todo.done, todo.id)}
              />
            </div>
            {editingId === todo.id ? (
              <input
                type="textbox"
                className="text"
                value={name}
                onChange={(event) => onInputChange(event.target.value)}
              />
            ) : (
              <div className="todoname">{todo.name}</div>
            )}
          </label>
          {editingId === todo.id ? (
            <div className="buttons">
              <button className="primary" onClick={() => SaveHandler(todo.id)}>
                Save
              </button>
              <button className="danger" onClick={() => cancelHandler()}>
                Cancel
              </button>
            </div>
          ) : (
            <div className="buttons">
              <button
                className="primary"
                onClick={() => editTodoHandler(todo.id, todo.name)}
              >
                Edit
              </button>
              <button className="danger" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ShowTodo;
