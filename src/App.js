import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAddToDo = () => {
    // alert("add to todo")
    text === "" ? alert("Please Write some thong") : setTodos([...todos, text]);
    setText("");
  };
  const handleClearTodo = () => {
    setTodos([]);
  };
  //console.log(todos)

  return (
    <div className="App">
      <h1>WE - REACT - TODO</h1>
      <h2>Text is {text}</h2>
      <input
        value={text}
        onChange={handleChange}
        placeholder="Write something here"
      ></input>{" "}
      <button onClick={handleAddToDo}>Add To Todo</button>
      <ol>
        {todos.map((todo) => (
          <li>
            {" "}
            <input type="checkbox"></input> {todo}
          </li>
        ))}
      </ol>
      {todos.length !== 0 ? (
        <button onClick={handleClearTodo}>Clear Todo</button>
      ) : (
        <h4>Make and see you todo here</h4>
      )}
    </div>
  );
}
