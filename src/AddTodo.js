import React, { useState } from "react";
import "./AddTodo.css";

function AddTodo({ setTodosHandler }) {
  const [name, setName] = useState("");
  const addBtnHandler = () => {
    setTodosHandler({
      name: name,
      done: false,
      id: Math.round(Math.random() * 1000),
    });
  };

  const onInputChange = (value) => {
    setName(value);
  };

  return (
    <div className="addtodo">
      <div className="textinput">
        {" "}
        <input
          type="textbox"
          className="text"
          onChange={(event) => onInputChange(event.target.value)}
        />
      </div>
      <div className="addbutton">
        {" "}
        <button className="add" onClick={addBtnHandler}>
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
