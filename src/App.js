import React, { useState, useEffect } from "react";

import AddTodo from "./AddTodo";
import "./App.css";
import ShowTodo from "./ShowTodo";

const SampleTodos = [
  {
    name: "read",
    done: false,
    id: 123,
  },
  {
    name: "eat",
    done: false,
    id: 124,
  },
  {
    name: "exercise",
    done: true,
    id: 125,
  },
  {
    name: "work",
    done: true,
    id: 126,
  },
];

function App() {
  const [allTodos, setAllTodos] = useState(SampleTodos);
  const [showTodos, setShowTodos] = useState([]);

  useEffect(() => {
    setShowTodos(allTodos);
  }, [allTodos]);

  const setTodosHandler = (todo) => {
    setAllTodos((prevTodos) => [...prevTodos, todo]);
  };

  const AllTodosHandler = () => {
    setShowTodos(allTodos);
  };

  const activeTodosHandler = () => {
    setShowTodos(allTodos.filter((todo) => !todo.done));
  };
  const CompletedTodosHandler = () => {
    setShowTodos(allTodos.filter((todo) => todo.done));
  };
  return (
    <div className="entireapp">
      <div className="App">
        <AddTodo setTodosHandler={setTodosHandler}></AddTodo>
        <div className="category">
          <button className="btn" onClick={AllTodosHandler}>
            All
          </button>
          <button className="btn" onClick={activeTodosHandler}>
            Active
          </button>
          <button className="btn" onClick={CompletedTodosHandler}>
            Completed
          </button>
        </div>
        {showTodos.length === 0 ? (
          <h1>No Todos to show</h1>
        ) : (
          <ShowTodo todos={showTodos}></ShowTodo>
        )}
      </div>
    </div>
  );
}

export default App;
