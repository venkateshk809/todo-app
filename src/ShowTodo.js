import React from "react";
import "./ShowTodo.css";

function ShowTodo({ todos }) {
  console.log(todos);

  const onCheckBoxChange = () => {
    console.log("helo");
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
                onChange={() => onCheckBoxChange()}
              />
            </div>
            <div className="todoname">{todo.name}</div>
          </label>
          <div className="buttons">
            <button className="primary">Edit</button>
            <button className="danger">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowTodo;
