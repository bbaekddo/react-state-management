import "./App.css";
import * as React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App(): React.ReactElement {
  const counter = useSelector((state: any) => state.counter);
  const todos: string[] = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: todoValue });
    setTodoValue("");
  };

  return (
    <div>
      Clicked: {counter} times
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
