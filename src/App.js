import React from "react";
import "./App.css";
import Colors from "./components/Colors";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <h3>Task 1</h3>
      <Colors />
      <hr />
      <h3>Task 2</h3>
      <ToDoList />
      <hr />
      <h3>Task 3</h3>
    </div>
  );
}

export default App;
